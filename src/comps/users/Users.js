import {useEffect, useState} from "react";
import {getUsers} from "../../API/Api";
import User from "../user/User";
import UserDetails from "../user-details/UserDetails";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
export default function Users(){


    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value.data])
        })
    }, [])




    return(
        <div>

            {

                users.map(value => <User key={value.id} item={value}/>)
            }


            <hr/>

            <Route path={'/users/:id'} component={UserDetails}></Route>


        </div>

    )

}