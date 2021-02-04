import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default axios.create({
    // baseURL: 'http://127.0.0.1:8000/api',
    baseURL: 'https://healing-waters-backend.herokuapp.com/api',

});
