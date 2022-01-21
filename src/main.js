import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
  var firebaseConfig = {
    apiKey: "AIzaSyAB_xRp5V9UDL0p2EZ_3iIk5PjNGLDLULM",
    authDomain: "ad-pro-832f4.firebaseapp.com",
    projectId: "ad-pro-832f4",
    storageBucket: "ad-pro-832f4.appspot.com",
    messagingSenderId: "162782964254",
    appId: "1:162782964254:web:2a090bb1f6059d49679c0f",
    measurementId: "G-QJQCV7GPN1"
  };
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics();
  
  fb.auth().onAuthStateChanged(user => {
    //здесь можно обновить пользователя в store
    if (user) {
      this.$store.dispatch('autoLoginUser', user)
    }
  });
}
}).$mount('#app')