<template>
    <div class="home-container">
        <label class="header">Hello! {{userName}}</label>
        <div class="items">
            <ul>
                <li v-for="todo in todos">
                    <todoItem :todoItem="todo"></todoItem>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import auth from './../services/authorization'
import todoService from './../services/todosService'
import todoItem from './todos/todoItem.vue'

export default {
    data: function() {
        return {
            userName: auth.user.login,
            todos: todoService.todos
        }
    },

    goHome: () => this.$router.push('home'),

    components: {
        'todoItem': todoItem
    }
}
</script>

<style scoped>
.home-container {
    display: grid;
    grid-template-rows: 20%px 20px 80%;
    grid-template-columns: 10% 80% 10%;
    grid-template-areas: 
    "....... ....... ......." 
    "....... header ......." 
    "....... items .......";
}

.header {
    grid-area: header;
}

.items {
    grid-area: items;
}
</style>
