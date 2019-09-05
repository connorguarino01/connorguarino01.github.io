import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEtsy } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'
import { faRedbubble } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Etsy from './Etsy.vue'
import Redbubble from './Redbubble.vue'
import About from './About.vue'
import Support from './Support.vue'

library.add(faEtsy, faFacebookF, faTumblr, faRedbubble, faPinterestP, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    { path: '/', component: Home },
    { path: '/Etsy', component: Etsy },
    { path: '/Redbubble', component: Redbubble },
    { path: '/About', component: About },
    { path: '/Support', component: Support }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    render: h => h(App),
    router,
})