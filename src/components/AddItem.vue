<template>
    <div class="card">
        <div class="card-header">
            <h1>Create Match</h1>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="addMatch">
                <div class="form-group">
                    <label>Your Name:</label>
                    <input type="text" class="form-control" v-model="newMatch.creator"/>
                </div>

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
import firebase from 'firebase'

const log = function (l) {
   console.log(l);
}

export default {
    components: {
        name: 'addMatch'
    },

    firebase: {
        matches: db.ref('matches') //firebase.initializeApp(config).database().ref('matches')
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
            let user = firebase.auth().currentUser;
            let match = this.$firebaseRefs.matches.child(this.newMatch.name);

            match.set({
                field: this.newMatch.field,
                creator: this.newMatch.creator,
                creatorEmail: user.email,
                datetime: this.newMatch.datetime,
                teamA: {},
                teamB: {},
            });

            match.child('players').push(this.newMatch.creator);

            this.newMatch.name = '';
            this.newMatch.field = '';
            this.newMatch.datetime = '';
            this.newMatch.creator = '';

            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
    input {
        border: 1px black;
    }

    .form-group {
        width: 400px;
        margin: auto;
        margin-top: 30px;

    }
</style>
