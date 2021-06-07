import axios from 'axios';
import { toast } from 'react-toastify';
import authApi from './auth';

axios.interceptors.response.use(null, err => {
    const isClient = err.response && err.response.status >= 400 && err.response.status < 500;
    if (!isClient) {
        console.log(err);
        return toast.error('Unexpected error occured, please try again later');
    }

    return Promise.reject(err);
});

axios.defaults.headers.common['x-auth-token'] = authApi.getToken() || null;

const http = axios;

export default http;