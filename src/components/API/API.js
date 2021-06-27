import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}


let axiosData = axios.create(options);

const getUsers = () => {
    return axiosData('/users')
}

const getPosts = (id) => {
    return axiosData('/posts/' + id)
}


export {getUsers, getPosts}