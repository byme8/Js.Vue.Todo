<template>
    <div class="todo-item">
        <input class="check filled-in" v-bind:id="todoItem.id" type="checkbox" v-model="todoItem.isDone" />
        <label v-show="!editMode" class="name" v-bind:for="todoItem.id"> {{todoItem.title}}</label>
        <input v-show="editMode" class="name" v-bind:for="todoItem.id" v-model="todoItem.title" />
        <div v-show="!editMode" class="edit">
            <span class="btn-floating btn-flat transparent" @click="edit()">
                <i class="material-icons black-text">edit</i>
            </span>
            <span class="btn-floating btn-flat transparent" @click="remove()">
                <i class="material-icons red-text">delete</i>
            </span>
        </div>
        <span v-show="editMode" class="edit btn-floating btn-flat transparent" @click="save()">
            <i class="material-icons green-text">save</i>
        </span>
    </div>
</template>
<script>
import todoService from '../../services/todosService'

export default {
    props: ['todoItem'],

    data: function() {
        return {
            editMode: false
        }
    },

    methods: {
        edit: function() {
            this.editMode = true
        },
        save: function() {
            this.editMode = false
            todoService.update(this.todoItem)
        },
        remove: function() {
            todoService.remove(this.todoItem.id)
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




