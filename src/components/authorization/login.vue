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
import 'materialize-css'
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
        doLogin: async function() {
            this.errors = []

            if (!this.login || !this.password) {
                this.errors.push('Please input login and password')
                return
            }

            try {
                let user = await authorization.authorize(this.login, this.password)

                if (this.$route.query.redirect) {
                    this.$router.push(this.$route.query.redirect)
                }
                else {
                    this.$router.push("/items")
                }

            } catch (ex) {
                let errors = ex.response.data.Errors
                for (var i = 0; i < errors.length; i++) {
                    this.errors.push(errors[i])

                }
            }
        },
        doSingUp: function() {
            this.errors = []
            Materialize.toast('Fail...', 1000)
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

