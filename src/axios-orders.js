import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test.firebaseio.com/'
});

export default instance;