import {useEffect, useState} from "react";
import {getUsersPosts} from "../../services/API";
import './User.css'
import Post from "../post/Post";


export default function User({items:{id, name}, switcherFn}){



   let [usersPosts, setUsersPosts] = useState([]);
   let [switcher, setSwitcher] = useState('hide');

   useEffect(() => {
       getUsersPosts(id).then(value => {
           setUsersPosts(value.data);
       })
   }, [])



    return(
        <div>
            {id} - {name}


            <button onClick={()=> {
                switcherFn(switcher, setSwitcher)
            }
        }>Show posts</button>



               {

                   usersPosts.map(value => {
                       return <div className={switcher}>
                           {/*<Post items={value} switcherFn={switcherFn} />*/}
                           <h2>Post of User {value.userId}</h2>
                           <p>{value.title}</p>
                           <p>{value.body}</p>
                       </div>

                   })
               }



        </div>
    )
}