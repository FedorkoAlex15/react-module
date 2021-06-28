import axios from 'axios';

 const options = {
      baseURL: 'https://jsonplaceholder.typicode.com'
  }

const getDataFromAPI = axios.create(options)

   const getUsers = () => {
      return getDataFromAPI('/users')
 }
  const getPosts = () => {
     return getDataFromAPI('/posts')
  }

  const getComments = () => {
     return getDataFromAPI('/comments')
  }

 export {getUsers, getPosts, getComments}














// From Git Hub
// import axios from "axios";
//
// let axiosInstanceUsers = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/users'
// });
//
// let axiosInstancePosts = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/posts'
// });
//
// let getUsers = () => axiosInstanceUsers();
// let getPosts = () => axiosInstancePosts();
//
// export {getUsers, getPosts};















