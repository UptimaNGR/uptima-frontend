import Vue from 'vue';
import Vuex from 'vuex';
import contact from './modules/contact.us';

Vue.use(Vuex);

const initialState = {
    contact: contact.state
};

const initialSnackState = {
    color: '',
    text: '',
    showSnackbar: false
};

export default new Vuex.Store({
    state: {
        snackbarData: initialSnackState
    },
    getters: {
        snackbarData: state => state.snackbarData
    },
    mutations: {
        updateSnackbar: (state, data) => {
            state.snackbarData = { ...initialSnackState, ...data };
            setTimeout(() => {
                state.snackbarData = { ...initialSnackState };
            }, 2000);
        }
    },
    modules: {
        contact
    }
});
