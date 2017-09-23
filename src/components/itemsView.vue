<template>
    <div class="container">
        <ul>
            <li v-for="todo in todos">
                <todoItem :todoItem="todo"></todoItem>
            </li>
        </ul>
        <input v-model="newTodoTitle" />
        <button class="waves-effect waves-teal btn-flat" @click="newTodo()">Add new todo</button>
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
            todos: todoService.todos,
            newTodoTitle: ''
        }
    },

    methods:{
        newTodo: function ()
        {
            todoService.addTodo(this.newTodoTitle)
            this.newTodoTitle = ''
        }
    },

    components: {
        'todoItem': todoItem
    }
}
</script>

<style scoped>
.todo-item{
    display: flex;
    flex-direction: row;
}
</style>
