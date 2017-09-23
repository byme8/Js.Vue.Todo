<template>
    <div>
        <nav class="nav-extended tile">
            <div class="nav-wrapper">
                <a href="/" class="brand-logo">Todo list!</a>
                <ul class="right">
                    <li v-show="isUserLogined">
                        <div>Hello, {{userName}}!</div>
                    </li>
                    <li v-show="!isUserLogined">
                        <button class="waves-effect waves-light btn-flat navtext" @click="singIn()">Sing in</button>
                    </li>
                    <li v-show="isUserLogined">
                        <button class="waves-effect waves-light btn-flat navtext" @click="logout()">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
import 'materialize-css'
import Vue from 'vue'
import router from './../router'
import authorization from '../services/authorization'

export default {
    router: router,
    data: function() {
        return {
            isUserLogined: false,
            userName: ''
        }
    },
    methods:
    {
        singIn: function() {
            router.push("/login")
        },
        logout: function() {
            authorization.logout()
            router.push("/")
        }
    },
    created: function() {
        authorization.currentUser.subscribe(user => {
            if (user) {
                this.isUserLogined = true
                this.userName = user.login
            }
            else {
                this.isUserLogined = false
            }
        });
    }
}
</script>
<style scoped>
.navtext{
    color: white
}
</style>
