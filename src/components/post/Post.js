import {useEffect, useState} from "react";
import {getCommentsFromPosts, getUsersPosts} from "../../services/API";

export default function Post({items: {id, userId, title, body}, switcherFn}){

   let [commentsOfPosts, setCommentsOfPosts] = useState([])

    let [switcher, setSwitcher] = useState('hide')

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
            <button onClick={() => {
                switcherFn(switcher, setSwitcher)
            }
            }>Show comments</button>


            {
                commentsOfPosts.map(value => {
                    return <div className={switcher} >
                        {value.name} - {value.email}
                    </div>

                })
            }





        </div>
    )
}