import {useEffect, useState} from "react";
import User from "../user/User";
import '../user/User.css'

export  default function Users(){



    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            })


    }, [])






    return (
        <div className={'flex'}>
            {
                posts.map(post => {
                    return <User item={post} />
                })

            }

        </div>
    );
}

