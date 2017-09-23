<template>
    <div>
        <ul>
            <li v-for="todo in todos">
                <todoItem :todoItem="todo"></todoItem>
            </li>
        </ul>
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
            userName: auth.currentUser.value.login,
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

</style>
