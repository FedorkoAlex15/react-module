import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}

let  getData = axios.create(options)


let  createPosts = () =>{
    return getData('/posts');
}

let  getPost = (id) => {
    return getData('/posts/' +  id)
}

export {createPosts, getPost }