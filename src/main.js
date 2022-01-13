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
    const firebaseConfig = {
      apiKey: "AIzaSyAbRDrYIT1sGu8_4FD-xhQr1ZNRZv9bAk4",
      authDomain: "mariya-785cb.firebaseapp.com",
      projectId: "mariya-785cb",
      storageBucket: "mariya-785cb.appspot.com",
      messagingSenderId: "790408619912",
      appId: "1:790408619912:web:593012a40f856db5b9fc3d",
      measurementId: "G-DNT7C8EMRV"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}).$mount('#app')