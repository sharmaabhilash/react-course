import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-b362c.firebaseio.com/'
});

export default instance;