import axios from 'axios'

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}


const getData = axios.create(options)

let getUsers = () => {
    return getData('/users');
}


let  getPosts = () => {
    return getData('/posts');
}

let getComments = () => {
    return getData('/comments');
}

export {getUsers, getPosts,  getComments}

