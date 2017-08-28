import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-material-design/dist/css/ripples.css'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'

import 'jquery'
import 'bootstrap'
import 'bootstrap-material-design'

import './index.html'
import $ from 'jquery'
import Vue from 'vue'
import App from './app/app.vue'

window.jquery = $

$.material.init()

new Vue(App).$mount('#app')