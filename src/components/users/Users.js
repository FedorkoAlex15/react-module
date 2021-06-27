import {useEffect, useState} from "react";
import  axios from 'axios';
import User from "../user/User";
import {getUsers} from "../API/API";
import Post from "../post/Post";
import Posts from "../posts/Posts";




export default function Users() {




    let [user, setUser] = useState([])
    useEffect(() => {
        getUsers().then(value => {
            setUser(value.data)
        })
    },[] );






    return(
        <div>
            {
                user.map((value) => {
                    return  <User items={value}/>  ;
                })
            }


        </div>
    )
}