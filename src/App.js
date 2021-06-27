import {createPosts, getPost} from "./API/API";
import {useEffect, useState} from "react";
import Posts from "./components/Posts/Posts";

function App() {

    let [post, setPost] = useState(null);

    let  appFn = (id) => {
        getPost(id).then(value => {
           setPost(value.data);
        })
    }




    let [posts, setPosts] = useState([])

    useEffect(() => {
        createPosts().then((value) => {
            setPosts(value.data)
        })


    }, [])

    console.log(posts)



  return (
      <div>
          <Posts items={posts}  appFn={appFn} />

        <hr/>
          {
             post && <div>{post.body}</div>
          }


      </div>



  );
}

export default App;
