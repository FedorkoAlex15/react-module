import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post";

export default function Posts({switcherFn}){

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => {
            setPosts(value.data)
        })

    }, [])




    return(

        <div>
            {
            posts.map(value => {
                return <Post items={value} switcherFn={switcherFn}/>
            })

            }
        </div>
    )
}