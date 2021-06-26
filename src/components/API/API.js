import  axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
}

let axiosData = axios.create(options);

export {axiosData}