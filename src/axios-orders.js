import  axios from 'axios';

const instance = axios.create({
    baseURL: 'https://testing-34652.firebaseio.com/'
})

export default instance;
