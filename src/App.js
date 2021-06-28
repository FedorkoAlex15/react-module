import {useEffect, useState} from "react";
import {getUsers} from "./services/API";
import Users from "./components/Users/Users";
function App() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data);
        })
    }, []);



    return (
        <div>
            <Users item={users}/>
        </div>
    );
}

export default App;








// import {getUsers} from "./services/API";
// import {useEffect, useState} from "react";
// import Users from "./components/Users/Users";
//
// function App() {
//
//     let [users, setUsers] = useState([])
//
//     useEffect(() => {
//         getUsers().then(value => {
//             setUsers(value.data)
//         })
//
//
//     }, [])
//
//
//
//
//   return (
//       <div>
//           {
//               users.map(value => {
//                   return  <Users items={value}/>
//               })
//           }
//       </div>
//
//   );
// }
//
// export default App;
