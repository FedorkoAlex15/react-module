import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}

let  getData = axios.create(options)


let  createPosts =() =>{
    return getData('/posts');
}

export {createPosts}