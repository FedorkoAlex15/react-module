import {getUsers} from "../../services/API";
import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users(){

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data)
        })
    }, [])


    console.log(users)

    return(

        <div>
            {
                users.map((value => {
                    return <User items={value}/>
                }))
            }


        </div>
    )
}