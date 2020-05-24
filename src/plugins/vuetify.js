// import Vue from 'vue';
// import Vuetify from 'vuetify/lib';
// import '-vuetify/src/stylus/app.styl';

// Vue.use(Vuetify, {
//     iconfont: 'md',
//     theme: {
//         primary: '#00E091'
//     }
// });
// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {};

export default new Vuetify(opts);
