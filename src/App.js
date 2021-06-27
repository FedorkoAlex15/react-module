import Users from "./components/users/Users";
import {getUsers, getPosts} from "./components/API/API";
import Posts from "./components/posts/Posts";


export default  function App(){
    return (
        <div>
          <Users/>

        </div>
    )
}



export {getUsers, getPosts}