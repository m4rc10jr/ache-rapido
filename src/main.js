import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './routes/router.js';
import VMask from 'v-mask';
import Moment from 'vue-moment';
import Vuelidate from 'vuelidate';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Moment);
Vue.use(VMask);
Vue.use(Vuelidate);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
