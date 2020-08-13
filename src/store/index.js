import Vue from 'vue';
import Vuex from 'vuex';
import contact from './modules/contact.us';
import auth from './modules/auth';

Vue.use(Vuex);

const initialSnackState = {
  color: '',
  text: '',
  showSnackbar: false
};

export default new Vuex.Store({
  state: {
    status: '',
    snackbarData: initialSnackState
  },
  getters: {
    getStatus: state => state.status,
    snackbarData: state => state.snackbarData
  },
  mutations: {
    reqInit: state => {
      state.status = 'loading';
    },
    reqSuccess: state => {
      state.status = 'success';
    },
    reqError: state => {
      state.status = 'error';
    },
    updateSnackbar: (state, data) => {
      state.snackbarData = { ...initialSnackState, ...data };
      setTimeout(() => {
        state.snackbarData = { ...initialSnackState };
      }, 2000);
    }
  },
  actions: {},
  modules: {
    contact,
    auth
  }
});
