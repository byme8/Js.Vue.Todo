<template>
    <div class="panel panel-info todo-item-grid">
        <div class="panel-heading todo-item-header">
            <input type="checkbox" class="form-control" v-model="isDone" />
            <div>
                <input v-if="editing" class="form-control" type="text" placeholder="Name" v-model="title" />
                <label class="default-font" v-else>{{title}}</label>
            </div>
            <button class="transparent" @click="toggleEditing()">
                &#x270E;
            </button>
        </div>
        <div v-if="description || editing" class="panel-body">
            <input v-if="editing" type="text" placeholder="Description" v-model="description" />
            <label class="default-font" v-else>{{description}}</label>
        </div>
    </div>
</template>
<script>

export default {
    props: ['todoItem'],

    data: function() {
        return {
            title: this.todoItem.title,
            description: this.todoItem.description,
            isDone: this.todoItem.isDone,
            editing: false
        }
    },
    methods:
    {
        toggleEditing: function() {
            this.editing = !this.editing
        }
    }
}
</script>
<style scoped>
.default-font {
    color: black;
    vertical-align: center;
    font-size: 16;
}

.todo-item-grid {
    display: grid;
    grid-template-rows: 50% 50%;
}

.todo-item-header {
    display: grid;
    grid-template-columns: 10% 80% 10%;
}

.todo-item-description {
    display: grid;
    grid-template-columns: 90% 10%;
    min-height: 10px;
}

.transparent {
    background-color: transparent;
    border-color: transparent;
}
</style>




