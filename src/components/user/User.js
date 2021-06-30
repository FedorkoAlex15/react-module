import {useEffect, useState} from "react";
import {getUsersPosts} from "../../services/API";
import './User.css'
import Post from "../post/Post";

export default function User({items:{id, name}}){

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
                    if (switcher === 'hide'){
                        setSwitcher('show')
                    } else if (switcher === 'show'){
                        setSwitcher('hide')
                    }
            }
        }>Show posts</button>



               {

                   usersPosts.map(value => {
                       return <div className={switcher}>
                           {/*<h3> {value.title}</h3>*/}
                           {/*<p>{value.body}</p>*/}
                           <Post items={value}/>
                       </div>

                   })
               }



        </div>
    )
}