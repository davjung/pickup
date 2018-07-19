<template>
  <div id="game">  
    <p>{{ game.id }}</p>
    <br><br>
  </div>
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

  data () {
    return {   
    }
  },

  computed: {
    game() {
      let game = this.gameData;
      return game;
    },

    
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>