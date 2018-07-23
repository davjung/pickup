<template>
    <div class="card">
        <div class="card-header">
            <h1>Create Match</h1>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="addItem">
                <div class="form-group">
                    <label>Game Name:</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Field Location:</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Game Date/Time:</label>
                    <input type="datetime" class="form-control"/>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Add Item"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../config/db'

export default {
    components: {
        name: 'AddItem'
    },

    firebase: {
        matches: db.ref('matches')
    },

    data () {
        return {
            name: '',
            field: '',
            creator: '',
            datetime: '',
        }
    },

    methods: {
        addItem() {
            this.$firebaseRefs.items.push({
                name: this.newItem.name,
                price: this.newItem.field
            })

            this.newItem.name = '';
            this.newItem.field = '';
            this.$router.push('/index')
        }
    }
}
</script>

<style scoped>
    input {
        border: 1px black;
    }
</style>
