import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../Post/Post";

export default function Posts({ID}){

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => {
            setPosts(value.data)
        })
    }, [])

    const filter = posts.filter(value => value.id === ID);

    return(
        <div>
            {
                filter.map(value => <Post key={value.id} item={value}/>)
            }

        </div>
    )

}








// From Git Hub
// import {useEffect, useState} from "react";
// import {getPosts} from "../../services/API";
// import Post from "../Post/Post";
//
// export default function Posts({userId}) {
//     let [posts, setPosts] = useState([]);
//     useEffect(() => {
//         getPosts().then(value => {
//             setPosts(value.data)
//         })
//     }, [])
//     const filter = posts.filter(value => value.id === userId);
//     return (
//         <div>
//             {filter.map(value => <Post key={value.id} item={value}/>)}
//         </div>
//     )
// }