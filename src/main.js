// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('dollars', (number) => {
  if (!number) return '-'

  if (number === 'skip') return 'skipped'

  return `$${parseInt(number).toLocaleString()}`
})

Vue.filter('percentage', (number) => {
  if (!number && !number === 0) return '-'

  return `${Math.round(number)}%`
})

Vue.filter('date', (date) => {
  if (date) return new Date(date).toLocaleString()

  return '-'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
