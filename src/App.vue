<template>
  <div id="app">
    <div class="headbar">
      <div class="branding">
        <img class="logo" src="./assets/logo.svg">
        <h3 class="logoWords">pickup</h3>
      </div>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 20px; */
}

#app div {
  display: block;
  margin: 0 auto;
}

.headbar {
  width: 100%;
  border-bottom: 1px solid black;
  background: lightgrey; 
  margin: 0 auto;
  height: 75px;
  
}

.headbar div {
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
}

.branding {
  float: left;
  position: relative;
  left: 5%;
}

.logo {
  height: 40px;
  display: inline;
}

.logoWords {
  display: inline;
}
</style>

<style lang="css">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>