import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getPosts} from "../API/API";

export default function User({items}){

    let [post, setPost] = useState([]);
    useEffect(() => {
        getPosts(items.id).then(value => {
          setPost(value.data)

        })
    }, [])



    return (
        <div>
            {items.id} - {items.name}


            {
                post.map((value) => {
                   return  <div>{value.body}</div>
                })
            }
        </div>
    )
}