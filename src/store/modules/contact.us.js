// eslint-disable-next-line no-unused-vars
import Vue from 'vue';
import Vuex from 'vuex';
import api from '../../utils/api';
import router from '../../router';

Vue.use(Vuex);

const state = {};
const getters = {};
const mutations = {};
const actions = {
    contactUs: ({ commit }, data) => {
        api.post('/api/v1/contact-us', data)
            .then(response => {
                if (response.status === 200) {
                    commit(
                        'updateSnackbar',
                        {
                            color: '#00C853',
                            text: 'Thanks for reaching out to us!',
                            showSnackbar: true
                        },
                        { root: true }
                    );
                    router.push('/');
                }
            })
            .catch(error => {
                if (error.response) {
                    commit(
                        'updateSnackbar',
                        {
                            color: '#F44336',
                            text: 'Please fill all form fields correctly',
                            showSnackbar: true
                        },
                        { root: true }
                    );
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
