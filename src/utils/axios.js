import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}` || 'https://uptima.herokuapp.com',
    timeout: 36000,
    headers: {},
    crossdomain: true
});

export default instance;
