import {useEffect, useState} from "react";
import {getUsers} from "../API/Api";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserPosts from "../user-posts/UserPosts";

export default function Users(){
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value.data])
        })

    }, [])

    console.log(users);
    return(
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }

            <Route path={'/users/:id/allposts'} component={UserPosts} />


        </div>
    )
}