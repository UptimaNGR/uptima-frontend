import Vue from 'vue';
import Vuex from 'vuex';
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import Vuelidate from 'vuelidate';
import vuetify from './plugins/vuetify'; // path to vuetify export
import App from './App.vue';
import router from './router';
import store from './store';
import ScrollAnimation from './directives/scrollanimation';
// import './plugin/vuetify';
Vue.directive('scrollanimation', ScrollAnimation);
Vue.use(VueFormWizard);

Vue.use(Vuex);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
