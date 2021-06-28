
import {getUsers} from "./services/API";
import {useEffect, useState} from "react";
import Users from "./components/Users/Users";

function App() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data)
        })


    }, [])




    return (
        <div>
            {
                <Users items={users}/>
            }
        </div>

    );
}

export default App;














// From gitHub
// import {useEffect, useState} from "react";
// import {getUsers} from "./services/API";
// import Users from "./components/Users/Users";
// function App() {
//     let [users, setUsers] = useState([]);
//     useEffect(() => {
//         getUsers().then(value => {
//             setUsers(value.data);
//         })
//     }, []);
//
//
//
//     return (
//         <div>
//             <Users item={users}/>
//         </div>
//     );
// }
//
// export default App;








