// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOcAVqfjyLG64CEQLrHsfAwYiINrj6sVc",
  authDomain: "pickup-ffc49.firebaseapp.com",
  databaseURL: "https://pickup-ffc49.firebaseio.com",
  projectId: "pickup-ffc49",
  storageBucket: "",
  messagingSenderId: "66485522931"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
