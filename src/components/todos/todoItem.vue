<template>
    <div class="todo-item">
        <input class="check filled-in" v-bind:id="todoItem.id" type="checkbox" v-model="todoItem.isDone" />
        <label class="name" v-bind:for="todoItem.id"> {{todoItem.title}}</label>
        <button class="edit waves-effect waves-teal btn-flat" @click="edit()">
            &#x270E;
        </button>
    </div>
</template>
<script>
import 'materialize-css'

export default {
    props: ['todoItem'],

    methods:{
        edit: function () {
             Materialize.toast('Changes saved', 1000)
        }
    }

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




