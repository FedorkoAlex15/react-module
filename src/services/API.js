import axios from 'axios';

const options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}

const getDataFromAPI = axios.create(options)

const getUsers = () => {
    return getDataFromAPI('/users')
}

const getPosts = (id) => {
    return getDataFromAPI('/users/' + id + '/posts')
}

export {getUsers, getPosts}
