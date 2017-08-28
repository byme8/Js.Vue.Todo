<template>
    <div class="home-container">
        <div class="jumbotron home">
            <label>Hello! {{userName}}</label>
            <div>
                <ul class="list-group flex">
                    <li class="list-group-item" v-for="todo in todos">
                        <todoItem :todoItem="todo"></todoItem>
                    </li>
                </ul>
            </div>
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
    grid-template-rows: 20px 80%;
    grid-template-columns: 10% 80% 10%;
}

.home {
    grid-row: 2/2;
    grid-column: 2/3;
}
</style>
