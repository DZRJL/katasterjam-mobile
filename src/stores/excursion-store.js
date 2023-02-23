import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useExcursionsStore = defineStore('excursions', {
  state: () => ({
    excursions: [],
    searchParameters: {
      name: '',
      pageNumber: 1,
      sort: null,
      sortDirection: null,
      my: false
    },
    totalPages: 0,
    searching: false
  }),
  getters: {
    getExcursions (state) {
      return state.excursions
    },
    getTotalPages (state) {
      return state.totalPages
    },
    getQuery (state) {
      return state.searchParameters.query
    },
    getPageNumber (state) {
      return state.searchParameters.pageNumber
    },
    getCurrentSort (state) {
      return state.searchParameters.sort
    },
    getSearchingStatus (state) {
      return state.searching
    }
  },
  actions: {
    addQueryParameter (query) {
      this.searchParameters.name = query
      this.searchParameters.pageNumber = 1
    },
    onlyMyExcursions (mine) {
      this.searchParameters.my = mine
      this.searchParameters.pageNumber = 1
    },
    incrementPageNumber () {
      this.searchParameters.pageNumber++
    },
    async searchForExcursions () {
      this.searching = true
      try {
        const response = await api.get('/api/excursions', {
          params: this.searchParameters
        })
        this.totalPages = JSON.parse(response.headers.pagination).totalPages
        if (this.searchParameters.pageNumber > 1) {
          response.data.map(excursion => this.excursions.push(excursion))
        } else {
          this.excursions = response.data
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.searching = false
      }
    },
    async joinExcursion (excursion) {
      try {
        await api.post(`/api/excursions/${excursion.id}/join`)
        const updateExcursion = this.excursions.find(e => e.id === excursion.id)
        updateExcursion.requestedJoin = true
      } catch (error) {
        console.error(error)
      }
    }
  }
})
