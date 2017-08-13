<template>
    <div>
        <md-layout md-gutter md-vertical-align="center">
            <md-layout md-row md-flex="50" md-flex-offset="25">
                <md-input-container>
                    <label>{{message}}</label>
                    <md-input v-model="message"></md-input>
                </md-input-container>
                <md-button @click="onClick()">{{message}}</md-button>
            </md-layout>
        </md-layout>
    </div>
</template>
<script>
export default {
    data: {
        message: 'hello'
    },
    methods: {
        onClick: function () {
            window.alert(this.message)
        }
    }
}
</script>

