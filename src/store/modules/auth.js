import Vue from 'vue';
import Vuex from 'vuex';
import VueSession from 'vue-session';
import api from '../../utils/api';
// import router from '../../router';

const options = {
    persist: true
};

Vue.use(Vuex);
Vue.use(VueSession, options);

const state = {
    isLoggedIn: false,
    loggedUser: {},
    loginSuccess: null,
    error: ''
};

const getters = {
    getLoggedUser: state => state.loggedUser,
    isLoggedIn: state => state.isLoggedIn,
    getError: state => state.error
};

const mutations = {
    logout: state => {
        state.loggedUser = {};
        state.isLoggedIn = false;
    },
    setLoggedUser: (state, user) => {
        state.loggedUser = user;
    },
    loginSuccess: (state, data) => {
        state.loggedUser = data;
        state.isLoggedIn = true;
    }
};

const actions = {
    login: ({ commit }, data) => {
        commit('reqInit', null, { root: true });

        api
            .post('/api/v1/admin/auth/login', data)
            .then(response => {
                if (response.status === 200) {
                    commit('reqSuccess', null, { root: true });

                    return true;
                }
                commit('reqError', null, { root: true });

                return false;
            })
            .catch(error => {
                commit('reqError', null, { root: true });

                commit(
                    'updateSnackbar',
                    {
                        color: '#F44336',
                        text: error.response.data.message || 'Authentication Error, Please Try Again.',
                        showSnackbar: true
                    },
                    { root: true }
                );
                // console.log(error.response);
                return error;
            });
        return true;
    }
};

export default {
    namespaced: true,
    actions,
    state,
    mutations,
    getters
};
