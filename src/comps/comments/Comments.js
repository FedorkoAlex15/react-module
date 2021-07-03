import {useEffect, useState} from "react";
import {getComments} from "../../API/Api";
import Comment from "../comment/Comment";
import {Route} from "react-router-dom";
import CommentDetail from "../comment-details/CommentDetail";

export function Comments(){
let [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then(value => {
            setComments(value.data)
        })
    }, [])




    return(
        <div>
            {
                comments.map((value) => <Comment key={value.id} item={value}/>)
            }

            <Route path={'/comments/:id'} component={CommentDetail}/>
        </div>
    )
}