<template>
    <div class="jumbotron small-jumbotron">
        <div>
            <input type="checkbox" v-model="isDone" />
            <input type="text" placeholder="Name" v-model="title" />
        </div>
        <div>
            <input type="text" placeholder="Description" v-model="description" />
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
        }
    }
}
</script>
<style scoped>
.small-jumboron {
    margin: 1px
}
</style>




