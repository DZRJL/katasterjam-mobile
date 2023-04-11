import { defineStore } from 'pinia'
import { db } from 'src/db/db'
import { api } from 'src/boot/axios'
import * as olProj from 'ol/proj'
import { getDistance } from 'ol/sphere'
import { Platform } from 'quasar'

export const useLocalCavesStore = defineStore('caves', {
  state: () => ({
    caves: [],
    searchParameters: {
      query: '',
      x: null,
      y: null,
      pageNumber: 1,
      pageSize: 10,
      sort: ''
    },
    totalPages: 1
  }),

  getters: {
    getCaves (state) {
      return state.caves
    },
    getTotalPages (state) {
      return state.totalPages
    },
    getPageNumber (state) {
      return state.searchParameters.pageNumber
    },
    getCurrentSort (state) {
      return state.searchParameters.sort
    }
  },

  actions: {
    async tryFetchCavesForOffline () {
      const importResponse = await api.get('/api/caves/imports/latest', {
        params: this.searchParameters
      })

      const importRecord = await db.caveImports.orderBy('id').last()
      if (importRecord && importRecord.id === importResponse.data.id) {
        return
      }

      await db.caveImports.put(importResponse.data)
      this.totalPages = importResponse.data.numberOfCaves
      this.searchParameters.pageNumber = 0
      this.searchParameters.pageSize = 500
      while (this.searchParameters.pageNumber < this.totalPages) {
        this.searchParameters.pageNumber += 1
        const response = await api.get('/api/caves', {
          params: this.searchParameters
        })
        const pagination = JSON.parse(response.headers.pagination)
        this.totalPages = pagination.totalPages
        const caves = response.data.map(cave => {
          const xy = olProj.fromLonLat([cave.lng, cave.lat])

          return {
            x: xy[0],
            y: xy[1],
            ...cave
          }
        })
        await db.caves.bulkPut(caves)
      }
      this.searchParameters.pageSize = 10
    },
    async searchForCaves () {
      if (this.searchParameters.sort === 'distance') {
        await this.searchForNearbyCaves()
        return
      }

      let query = db.caves

      if (this.searchParameters.query && isNaN(this.searchParameters.query)) {
        const queryLower = this.searchParameters.query
        query = query.filter((item) => {
          return item.name.toLowerCase().indexOf(queryLower) > -1
        })
      } else if (this.searchParameters.query) {
        query = query.where('caveNumber').equals(parseInt(this.searchParameters.query))
      }

      this.totalPages = Math.ceil(await query.count() / this.searchParameters.pageSize)
      const queryWithOffset = query.offset((this.searchParameters.pageNumber - 1) * this.searchParameters.pageSize)
        .limit(this.searchParameters.pageSize)
        .toArray()

      const localCaves = await queryWithOffset
      if (this.searchParameters.pageNumber > 1) {
        localCaves.map(cave => this.caves.push(cave))
      } else {
        this.caves = localCaves
      }
    },
    incrementPageNumber () {
      this.searchParameters.pageNumber++
    },
    clearLocationParameters () {
      this.searchParameters = {
        query: this.searchParameters.query,
        pageNumber: 1,
        pageSize: 10,
        sort: ''
      }
    },
    addQueryParameter (query) {
      this.searchParameters.query = query
    },
    async searchForNearbyCaves () {
      this.searchParameters.sort = 'distance'
      if (Platform.is.cordova) {
        window.BackgroundGeolocation.getCurrentLocation(async (location) => {
          const closestCaves = await this.getClosestCavesFor(location)

          if (this.searchParameters.pageNumber > 1) {
            closestCaves.map(cave => this.caves.push(cave))
          } else {
            this.caves = closestCaves
          }
        }, (code, message) => {
          console.error('Error when trying to fetch location', code, message)
        }, {
          enableHighAccuracy: true
        })
      } else {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const closestCaves = await this.getClosestCavesFor(position.coords)

          if (this.searchParameters.pageNumber > 1) {
            closestCaves.map(cave => this.caves.push(cave))
          } else {
            this.caves = closestCaves
          }
        }, (error) => {
          console.log(error)
        })
      }
    },
    async getClosestCavesFor (coordinates) {
      const caves = (await db.caves.toArray()).map(cave => {
        const distance = getDistance([cave.lng, cave.lat], [coordinates.longitude, coordinates.latitude])
        return {
          ...cave,
          distance
        }
      })
      const skip = (this.searchParameters.pageNumber - 1) * this.searchParameters.pageSize

      return caves.sort((a, b) => a.distance - b.distance)
        .slice(skip, skip + this.searchParameters.pageSize)
    }

  }
})
