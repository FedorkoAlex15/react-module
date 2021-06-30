import {useEffect, useState} from "react";
import {getComments} from "../../services/API";
import Post from "../post/Post";

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
                    return <Comments items={value}/>
                })
            }


        </div>
    )



}