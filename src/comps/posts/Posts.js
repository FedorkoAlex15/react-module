import {useEffect, useState} from "react";
import {getPosts} from "../../API/Api";
import Post from "../post/Post";
import {Route} from "react-router-dom";
import PostDetails from "../post-details/PostDetails";

export default function Posts(){
    let  [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value.data])
        })
    }, [])




    return(
        <div>

            {
                posts.map(value => <Post key={value.id} items={value} /> )
            }

            <hr/>

            <Route path={'/posts/:id'} component={PostDetails}/>
        </div>

    )

}