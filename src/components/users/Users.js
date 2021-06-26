import {useEffect, useState} from "react";
import  axios from 'axios';
import User from "../user/User";
export default function Users() {


    let options = {
        baseURL: 'https://jsonplaceholder.typicode.com'
    }


    let axiosData = axios.create(options);

    const getUsers = () => {
        return axiosData('/users')
    }



    let [user, setUser] = useState([])
    useEffect(() => {
        getUsers().then(value => {
            setUser(value.data)
        })
    },[] )

    console.log(user)

    return(
        <div>
            {
                user.map((value) => {
                    return  <User items={value}/> ;
                })

            }
        </div>
    )
}