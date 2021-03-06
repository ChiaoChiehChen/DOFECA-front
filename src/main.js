import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/all.scss'
import vuetify from './plugins/vuetify'
import './plugins/axios.js'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import mixin from './mixin.js'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import 'animate.css/source/animate.css'
// import 'animate.css'
import VueWow from 'vue-wow'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'G-VQ4YTPQT7Z' }
})
Vue.use(VueWow)
Vue.component('ImgInputer', ImgInputer)
Vue.use(VueSweetalert2)
Vue.use(VueAwesomeSwiper)
Vue.mixin(mixin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
