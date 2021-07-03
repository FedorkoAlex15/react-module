import {useEffect, useState} from "react";
import {getPosts} from "../API/Api";
import Post from "../Post/Post";

export default function UserPosts(props){
let {match: {params:{id}}} = props

    let [posts, setPosts] = useState([]);

    useEffect(() => {
       getPosts(id).then(value => {
           setPosts([...value.data])
       })
    }, [id])



    return(
        <div>
            {posts.map(value => <Post items={value}/> )}
        </div>
    )
}