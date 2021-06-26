import {useEffect, useState} from 'react';
import {getUsers} from "./services/API";
import Users from "./components/users/Users";
export default function App(){



    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value);


        })
    }, [])




  return (
      <div>
        <Users items={users}/>


      </div>

  );
}


