import {useEffect, useState} from "react";
import {getUsers} from "../../services/App";
import User from "../User/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../User/user-details/User-details";

export default function Users(){

   let [users, setUsers] = useState([]);

    useEffect(() => {

        getUsers().then((value)=> {
            setUsers([...value.data]);
        })

    }, [])




    return(
        <div>

            {
                users.map(value => {
                    return <User item={value}/>
                })
            }

            <Route path={'/users/:id'} component={UserDetails}/>

        </div>
    )
}