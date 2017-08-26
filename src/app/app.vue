<template>
    <div class="container">
        <login />
    </div>
</template>
<script>
import login from '../components/authorization/login.vue'

export default {
    data: {
        message: 'hello'
    },
    methods: {
        onClick: function () {
            window.alert(this.message)
        }
    },
    components: {
        'login': login
    }
}
</script>