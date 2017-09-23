<template>
    <div class="todo-item">
        <input class="check filled-in" v-bind:id="todoItem.id" type="checkbox" v-model="todoItem.isDone" />
        <label class="name" v-bind:for="todoItem.id"> {{todoItem.title}}</label>
        <button class="edit waves-effect waves-teal btn-flat">
            &#x270E;
        </button>
    </div>
</template>
<script>

export default {
    props: ['todoItem']
}
</script>
<style scoped>
.todo-item {
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
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




