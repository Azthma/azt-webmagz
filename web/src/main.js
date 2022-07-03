import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
