<template>
    <div class="card">
        <div class="card-header">
            <h1>Create Match</h1>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="addMatch">
                <div class="form-group">
                    <label>Game Name:</label>
                    <input type="text" class="form-control" v-model="newMatch.name"/>
                </div>
                <div class="form-group">
                    <label>Field Location:</label>
                    <input type="text" class="form-control" v-model="newMatch.field"/>
                </div>
                <div class="form-group">
                    <label>Game Date/Time:</label>
                    <input type="datetime-local" class="form-control" v-model="newMatch.datetime"/>
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
        name: 'addMatch'
    },

    firebase: {
        matches: db.ref('matches')
    },

    data () {
        return {
            newMatch: {
                name: '',
                field: '',
                creator: '',
                datetime: '',
            }
        }
    },

    methods: {
        addMatch() {
            this.$firebaseRefs.matches.push({
                name: this.newMatch.name,
                price: this.newMatch.field
            })

            this.newMatch.name = '';
            this.newMatch.field = '';
            // this.$router.push('/index')
        }
    }
}
</script>

<style scoped>
    input {
        border: 1px black;
    }
</style>
