<template>
     
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div style="margin:auto">
            <h3 class="headline mb-0">{{ game['.key'] }}</h3>
            <div id=matchDetails style="text-align:left">
                <p>Creator: {{ game.creator }}<br></p>
                <p>Location: {{ game.field }}<br></p>
                <p>Slots: {{ game.slots }}</p>
                <p>Date/Time: {{ game.datetime }}</p>

            </div>
          </div>
        </v-card-title>

        <v-card-actions id="buttons">
          <div>
            <v-btn flat color="orange">Join</v-btn>
            <v-btn flat color="orange">Leave</v-btn>
          </div>
        </v-card-actions>
      </v-card>
      <br>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  name: 'game',
  props: {
    matchData: {
      type: Object,
      required: true
    },
  },

  computed: {
    game() {
      let game = this.matchData;
      return game;
    },
  },

  data () {
    return {   
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #buttons div{
      margin: auto; 
  }
</style>