import {useState} from "react";
import {getComments} from "../../services/API";
import Comment from "../Comment/Comment";

export default function Comments({ID}){

    let [comments, setComments] = useState([])

     useState(() => {
         getComments().then(value => {
             setComments(value.data)
         })

     })

    let filterComments = comments.filter(value => value.id === ID)


    return(
        <div>
            {
                filterComments.map(value => {
                    return <Comment key={value.id} item={value} />
                })
            }

        </div>
    )
}