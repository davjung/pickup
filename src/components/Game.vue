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
            <h3 class="headline mb-0">Game {{ game.id + 1 }}</h3>
            <div id=matchDetails style="text-align:left">
                <p>Creator: {{ game.creator.name.first }} {{ game.creator.name.last }}<br></p>
                <p>Location: {{ game.field }}<br></p>
                <p>Slots: {{ game.slots }}</p>
                <p>Date: {{ game.date }}</p>
                <p>Time: {{ game.time }}</p>


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
    gameData: {
      type: Object,
      required: true
    },
  },

  computed: {
    game() {
      let game = this.gameData;
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