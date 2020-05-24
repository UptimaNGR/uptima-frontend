import Vue from 'vue';
import Vuex from 'vuex';
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import vuetify from './plugins/vuetify'; // path to vuetify export
import App from './App.vue';
import router from './router';
// import './plugin/vuetify';

Vue.use(VueFormWizard);

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app');
