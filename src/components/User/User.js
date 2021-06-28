import {useState} from "react";
import Posts from "../Posts/Posts";
import './User.css'

export default function User({items}){

    let [switcher, setSwitcher] = useState('hide')


    return(
        <div>
            {items.id} - {items.name}

            <button onClick={() => {

                if (switcher === 'hide'){
                    setSwitcher('show')
                } else if (switcher === 'show') {
                   setSwitcher('hide')
                }

                }
            }>Show the post</button>

            <div className={switcher}>
                <Posts ID={items.id}/>
            </div>

        </div>
    )
}







// From Git Hub
// import Posts from "../Posts/Posts";
// import './User.css'
// import {useState} from "react";
// import './User.css'
//
//
// export default function User({item: {id, name}}) {
//     let [switcher, setSwitcher] = useState('hide');
//     return (
//         <div>
//             {id}. {name}
//             <button onClick={() => {
//                 if (switcher === 'hide') {
//                     setSwitcher('show')
//                 } else if (switcher === 'show') {
//                     setSwitcher('hide')
//                 }
//             }
//             }>
//                 Post
//             </button>
//             <div className={switcher}>
//                 <Posts userId={id}/>
//             </div>
//         </div>
//     );
// }




















