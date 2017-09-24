<template>
    <div class="todo-item">
        <input class="check filled-in" v-bind:id="todoItem.id" type="checkbox" v-model="todoItem.isDone" />
        <label class="name" v-bind:for="todoItem.id"> {{todoItem.title}}</label>
        <div class="edit">
            <span class="btn-floating btn-flat transparent" @click="edit()">
                <i class="material-icons black-text">edit</i>
            </span>
            <span class="btn-floating btn-flat transparent" @click="remove(todoItem.id)">
                <i class="material-icons red-text">delete</i>
            </span>
        </div>
    </div>
</template>
<script>
import 'materialize-css'
import todoService from '../../services/todosService'

export default {
    props: ['todoItem'],

    methods: {
        edit: function() {
            Materialize.toast('Changes saved', 1000)
        },
        remove: function(todoItemId) {
            todoService.remove(todoItemId)
        }
    }
}
</script>
<style scoped>
.todo-item {
    display: grid;
    grid-template-columns: 1fr 8fr auto;
    grid-template-areas: "check name edit"
}

.check {
    grid-area: check
}

.name {
    grid-area: name
}

.edit {
    display: flex;
    flex-direction: row;
    grid-area: edit;
}
</style>




