import axios from 'axios';

let options = {
    baseUrl: 'https://jsonplaceholder.typicode.com/users',
}


let axiosInstance = axios.create(options) ;

const getUsers = () => {
    return axiosInstance('/users');

}

export{getUsers}