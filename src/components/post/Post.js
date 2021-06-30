import {useEffect, useState} from "react";
import {getCommentsFromPosts, getUsersPosts} from "../../services/API";

export default function Post({items: {id, userId, title, body}}){

   let [commentsOfPosts, setCommentsOfPosts] = useState([])

    useEffect(() => {
        getCommentsFromPosts(userId).then(value => {
            setCommentsOfPosts(value.data)
        })
    }, [])

console.log(commentsOfPosts)

    return(
        <div>
            <h2>Post of User {userId}</h2>
            <p>{title}</p>
            <p>{body}</p>



            {
                commentsOfPosts.map(value => {
                    return <div>{value.name} - {value.email} </div>

                })
            }





        </div>
    )
}