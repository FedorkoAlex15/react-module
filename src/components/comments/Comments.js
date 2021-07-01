import {useEffect, useState} from "react";
import {getComments} from "../../services/API";
import Post from "../post/Post";
import Comment from "../comment/Comment";

export default function Comments(){

   let [comments, setComments] =  useState([]);

   useEffect(() => {
       getComments().then(value => {
           setComments(value.data);
       })
   }, [])

    console.log(comments)

    return(
        <div>

            {
                comments.map(value => {
                    return <Comment items={value}/>
                })
            }


        </div>
    )



}