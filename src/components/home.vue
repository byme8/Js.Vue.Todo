<template>
    <div class="container login-container">
        <div class="jumbotron login">
            <button @click="goHome()" class="btn">Home</button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goHome: function () {
            this.$router.push('home')
        }
    }
}
</script>

<style scoped>
.home-container {
    display: flex;
    width: 100%;
    height: 500;
}

.home {
    display: flex;
    justify-content: center;
    margin: auto;
}
</style>
