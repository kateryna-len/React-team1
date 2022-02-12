import axios from 'axios';

let options = {
    baseURL: 'http://localhost:5000'
};

const axiosInstance = axios.create(options);

const getBooks = () => {
    return axiosInstance.get('/api');
}

export {getBooks, axiosInstance};
