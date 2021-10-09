import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import PlaceAutocomplete from 'vue2-google-maps/src/components/autocomplete.vue' // replace src with dist if you have Babel issues
import Vuetify, {
  VApp,
  VMain,
  VContainer
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VMain,
    VContainer
  }
})

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_TOKEN,
    libraries: 'places'
  }
})
 
Vue.component('PlaceAutocomplete', PlaceAutocomplete)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
