<template>
    <div class="login-container">
        <div class="login">
            <form>
                <div v-for="error in errors">
                    <div class="card red darken-1">
                        <div class="card-content white-text">
                            {{error}}
                        </div>
                    </div>
                </div>
                <div>
                    <input v-model="login" type="text" placeholder="Login">
                </div>
                <div>
                    <input v-model="password" type="password" placeholder="Password">
                </div>
                <div>
                    <button class="waves-effect waves-teal btn-flat" type="button" @click="doLogin()">Login</button>
                    <button class="waves-effect waves-teal btn-flat" type="button" @click="doSingUp()">Sing up</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import authorization from '../../services/authorization'

export default {
    data() {
        return {
            login: '',
            password: '',
            errors: []
        }
    },
    methods:
    {
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

            this.$router.push(this.$route.query.redirect)
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
    height: 500px;
}

.login {
    margin: auto;
    min-width: 300px;
}
</style>

