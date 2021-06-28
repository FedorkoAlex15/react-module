import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";

export default function User({res: {items, result}}){

    // let  [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     getPosts(items.id).then(value => {
    //         setPosts(value.data)
    //     })
    // }, [])

// function getPost(){
//     posts.map(value =>{
//         return value.body
//     })
// }
//     console.log(getPost())

    return(
        <div>

            { items.name } - {result.body}
              - <button>Show posts</button>

            {/*{*/}
            {/*    posts.map(value =>{*/}
            {/*        return <div>{value.body}</div>*/}
            {/*    })*/}
            {/*}*/}



            <div></div>
        </div>
    )
}