import {Link, Route} from "react-router-dom";
import {getUserPosts} from "../../services/App";
import {useState} from "react";

export default function User({item}){

    let [posts, setPosts] = useState([])

    return(
        <div>
            {/*{item.name} - {item.name} - <Link to={'/users/' + item.id}>details</Link>*/}
            {item.name} - {item.name} - <Link to={
                {
                pathname: '/users/' + item.id,
                    state: item
                }

        }>details</Link>

        </div>
    )
}