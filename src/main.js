import './assets/index.html'

import Vue from 'vue'
import 'vue-material/dist/vue-material.css'
import VueMaterial from 'vue-material'
import App from './app/app.vue'

Vue.use(VueMaterial)

new Vue(App).$mount('#app')