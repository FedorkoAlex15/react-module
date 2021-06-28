import User from "../User/User";

export default function Users({item, showPosts, posts}) {
    return (
        <div>
            {item.map(value => <User key={value.id} item={value}/>)}
        </div>
    );
}









// import User from "../User/User";
// import {useEffect, useState} from "react";
// import {getPosts} from "../../services/API";
//
// export default function Users({items}){
//
//     let  [posts, setPosts] = useState([]);
//     useEffect(() => {
//         getPosts(items.id).then(value => {
//             setPosts(value.data)
//         })
//     }, [])
//
//
//
//
//     return(
//         <div>
//
//             <div> <User res={items}/> </div>
//
//             {
//                 posts.map((result) => {
//                     return <User res={result}/>
//                 })
//             }
//
//             {/*{*/}
//             {/*    items.map((result) => {*/}
//             {/*        return <User key={result.id} items={result} />*/}
//             {/*    })*/}
//             {/*}*/}
//
//         </div>
//     )
// }