<template>
  <div class="home">
    <button>Create a match</button>
    <button v-on:click="logout">Logout</button>
    <div id="current-matches">
      <h2>Upcoming Matches</h2>
      
      <game
        v-for="Game in Games"
        v-bind:key = "Game.id"
        v-bind:gameData = "Game"
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

export default {
  name: 'Home',
  data () {
    return {
      Games: Object,
    }
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
      let games = []
      
      for (let i = 0; i<1; i++) {
        let game = {}

        this.axios.get("https://randomuser.me/api/?results=14&inc=name,gender,phone,email,picture&noinfo")
        .then(response => {
          let teamA = response.data.results.slice(0,7);
          let teamB = response.data.results.slice(7,14);
          teamA.forEach(member => {
            member.team = 'A';
          });
          teamB.forEach(member => {
            member.team = 'B';
          })

          game.teamA = teamA;
          game.teamB = teamB;
          game.players = game.teamA.concat(game.teamB);
          game.slots = 22 - game.players.length;
          game.field = "Long Field";
          game.id = i;

          game.creator = game.teamA[0];
        })
        games.push(game);
      }
      this.Games = games;

    }
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
</style>
