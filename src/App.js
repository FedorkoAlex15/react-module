import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import User from "./components/user/User";
import Users from "./components/users/Users";




function App() {

    // let [posts, setPosts] = useState([]);
    //
    // useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(value => value.json())
    //     .then(value => {
    //        setPosts(value)
    //     })
    //
    // }, [])


  return (
    <div>

      <Users/>

    </div>
  );
}

export default App;
