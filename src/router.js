import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from './services/authorization'
import Home from './components/home.vue'
import Login from './components/authorization/login.vue'

Vue.use(VueRouter)

function requireAuth(to, from, next) {
    if (!Auth.loggedIn()) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
}

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home, beforeEnter: requireAuth },
        { path: '/home', component: Home, beforeEnter: requireAuth },
        { path: '/login', component: Login },
    ]
})