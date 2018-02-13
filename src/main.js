// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueYoutube from 'vue-youtube'

Vue.config.productionTip = false

Vue.prototype.$eventHub = new Vue()

Vue.use(VueYoutube)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
