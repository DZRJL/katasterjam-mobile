<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import proj4 from 'proj4'
import { register } from 'ol/proj/proj4'
import { useAuthStore } from 'stores/auth-store'
import { useLocationStore } from 'stores/location-store'

proj4.defs('EPSG:3912', '+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=-5000000 +ellps=bessel +towgs84=426.9,142.6,460.1,4.91,4.49,-12.42,17.1 +units=m +no_defs')
proj4.defs('EPSG:102060', '+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=-5000000 +ellps=bessel +towgs84=426.62,142.62,460.09,4.98,4.49,-12.42,-17.1 +units=m +no_defs +type=crs')
proj4.defs('EPSG:3857', '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs')
proj4.defs('EPSG:3794', '+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs')
register(proj4)

export default defineComponent({
  name: 'App',
  setup () {
    const store = useAuthStore()
    const locationStore = useLocationStore()
    document.addEventListener('pause', (ev) => {
      const locationStore = useLocationStore()

      if (locationStore.getWatchId) {
        navigator.compass.clearWatch(locationStore.getWatchId)
      }
      navigator.geolocation.clearWatch(locationStore.getLocationWatchId)
    }, false)
    document.addEventListener('resume', (ev) => {
      const locationStore = useLocationStore()
      locationStore.initCompassAndLocation()
    }, false)

    locationStore.initCompassAndLocation()
    return {
      store
    }
  },
  beforeCreate () {
    this.store.init()
  }
})
</script>
