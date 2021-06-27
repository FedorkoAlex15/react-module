import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getPosts} from "../../App";

export default function User({items}){

    let [post, setpost] = useState([]);
    useEffect(() => {
        getPosts(items.id).then(value => {
          setpost(value.data)

        })
    }, [])



    return (
        <div>
            {items.id} - {items.name}


            {
                post.map((value) => {
                   return  <div>{value.title}</div>
                })
            }
        </div>
    )
}