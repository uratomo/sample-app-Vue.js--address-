import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from "firebase"

Vue.config.productionTip = false


  
  {/* // Your web app's Firebase configuration */}
  const firebaseConfig = {
    apiKey: "AIzaSyBvCmmynnbyayJHPmXEzlQ8TsoJDYJ1NHA",
    authDomain: "my-address-pj-3ed33.firebaseapp.com",
    databaseURL: "https://my-address-pj-3ed33.firebaseio.com",
    projectId: "my-address-pj-3ed33",
    storageBucket: "",
    messagingSenderId: "10204680750",
    appId: "1:10204680750:web:0880fd07683244e0"
  };

  firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
