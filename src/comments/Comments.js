import './Comments.css';
import {useEffect, useState} from "react";
import Comment from "./comment/Comment";

export default function Comments(){

   let [comments, setcomments] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(response => {
                setcomments(response)
            })

    }, [])

    return (
        <div className={'boxes'}>
            {
               comments.map(comment => {
                   return <Comment item={comment}/>
               })
            }

        </div>
    )
}



