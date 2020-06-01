// eslint-disable-next-line no-unused-vars
import Vue from 'vue';
import Vuex from 'vuex';
import api from '../../utils/api';

Vue.use(Vuex);

const state = {
    appsData: {}
};
const getters = {
    getAppsData: state => state.appsData
};
const mutations = {
    setApps: (state, data) => {
        state.appsData = data;
    }
};
const actions = {
    contactUs: ({ commit }, data) => {
        api.post('/api/v1/contact-us', data)
            .then(response => {
                if (response.status === 200) {
                    commit(
                        'updateSnackbar',
                        {
                            color: 'success',
                            text: 'Success, New Payment schedule created',
                            showSnackbar: true
                        },
                        { root: true }
                    );
                }
            })
            .catch(error => {
                if (error.response) {
                    commit(
                        'updateSnackbar',
                        {
                            color: 'error',
                            text: error.response.data.message,
                            showSnackbar: true
                        },
                        { root: true }
                    );
                } else {
                }
                return error;
            });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
