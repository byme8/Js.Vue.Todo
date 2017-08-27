<template>
    <div class="container login-container">
        <div class="jumbotron login">
            <form>
                <div v-for="error in errors">
                    <div class="alert alert-danger">{{error}}</div>
                </div>
                <div class="form-group label-floating">
                    <input v-model="login" type="text" class="form-control" placeholder="Login">
                </div>
                <div class="form-group label-floating">
                    <input v-model="password" type="password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group">
                    <button type="button" @click="doLogin()" class="btn">Login</button>
                    <button type="button" @click="doSingUp()" class="btn btn-info">Sing up</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import authorization from '../../services/authorization'

export default {
    data: function() {
        return {
            login: '',
            password: '',
            errors: []
        }
    },
    methods: {
        doLogin: function() {
            this.errors = []

            if (!this.login || !this.password) {
                this.errors.push('Please input login and password')
                return
            }

            const user = authorization.authorize(this.login, this.password)
            if (!user) {
                this.errors.push('Such user is missing')
                return
            }

            this.$router.push('home')
        },
        doSingUp: function() {
            this.errors = []

            window.alert("Sign up " + this.login + " " + this.password)
        }
    }
}
</script>
<style scoped>
.login-container {
    display: flex;
    width: 100%;
    height: 500;
}

.login {
    display: flex;
    justify-content: center;
    margin: auto;
}
</style>

