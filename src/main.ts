import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './sass/main.scss';

import HeaderBar from './components/HeaderBar.vue';
import CustomParallax from './components/CustomParallax.vue';

Vue.config.productionTip = false;

Vue.use(vuetify, {
  components: {
    HeaderBar,
    CustomParallax,
  },
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
