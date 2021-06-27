import {createPosts} from "./API/API";
import {useEffect, useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";
import Posts from "./components/Posts/Posts";

function App() {

    console.log(createPosts())

    let [posts, setPosts] = useState([])

    useEffect(() => {
        createPosts().then((value) => {
            setPosts(value.data)
        })


    }, [])

    console.log(posts)



  return (
      <div>
          <Posts items={posts} />

      </div>

  );
}

export default App;
