<template>
  <div class="home">
    <button id="createMatchBtn" class="topbtn" v-on:click="createMatch">Create a match</button>
    <br>
    <button id="logOutBtn" class="topbtn" v-on:click="logout">Logout</button><br><br> 
    <div id="current-matches">
      <h1>Upcoming Matches</h1>
      <br>
      <game
        v-for="match in matches"
        v-bind:key = "match.id"
        v-bind:matchData = "match"
      ></game>



    </div>
  </div>
</template>

<script>

const log = function (l) {
   console.log(l);
}

import firebase from 'firebase/app'
import 'firebase/auth'
import game from './Game'
import * as sample from '../assets/sampleGames.json'
import { db } from '../config/db'



export default {
  name: 'Home',
  data () {
    return {
      matches: []
    }
  },
  
  firebase: {
    matches: db.ref('matches')
  },



  components: {
    game
  },

  mounted() {
    this.testData();
  },

  methods: {
    logout: function() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.replace('login')
      })
    },

    testData: function() {
      this.Games = sample;
    },

    createMatch: function() {
      this.$router.push('Add')
    },
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.topbtn{
  border: 1px solid;
  border-radius: 2px;
  padding: 3px;
  margin: 3px;
  width: 150px;
}
</style>
