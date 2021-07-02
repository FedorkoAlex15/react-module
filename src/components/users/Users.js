import {useEffect, useState} from "react";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";
//
import UserDetails2 from "../user-details2/UserDetails2";
export default function Users(){

let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value =>  value.json())
            .then(value => {
                setUsers([...value]);
            })
    }, [])
    return(
        <div>

            {
                users.map(value => <User key={value.id} item={value}/>)
            }

            <Switch>
                {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
                <Route path={'/users/:id'} component={UserDetails2}/>
            </Switch>


        </div>
    )
}