import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}


const getData = axios.create(options);

const getUsers = () => {
   return getData('/users')
}

const getPosts = () => {
    return getData('/posts')
}

const getUsersPosts = (id) => {
    return getData('/users/' + id + '/posts')
}


const getCommentsFromPosts = (id) =>{
    return getData('/posts/' + id + '/comments')
}
export {getUsers, getPosts, getUsersPosts, getCommentsFromPosts}


