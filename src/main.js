// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/auth'
import Vuetify from 'vuetify'
import VueAxios from 'vue-axios'
import axios from 'axios'
// import 'vuetify/dist/vuetify.min.css' 


Vue.use(Vuetify)
Vue.use(VueAxios, axios)
Vue.use(firebase)

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
firebase.auth().onAuthStateChanged(function (user) {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
})
});



