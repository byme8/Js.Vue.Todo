<template>
    <div class="todo-item">
        <input class="check filled-in" v-bind:id="id" type="checkbox" v-model="isDone" />
        <label class="name" v-bind:for="id"> {{title}}</label>
        <button class="edit waves-effect waves-teal btn-flat">
            &#x270E;
        </button>
    </div>
</template>
<script>

export default {
    props: ['todoItem'],

    data: function() {
        return {
            id: this.todoItem.id,
            title: this.todoItem.title,
            description: this.todoItem.description,
            isDone: this.todoItem.isDone,
        }
    }
}
</script>
<style scoped>
.todo-item {
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-areas: "check name edit"
}

.check {
    grid-area: check
}

.name {
    grid-area: name
}

.edit {
    grid-area: edit
}
</style>




