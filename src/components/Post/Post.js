import {useState} from "react";
import Comments from "../Comments/Comments";
import '../User/User.css'

export default function Post({item}) {

    let [switcher, setSwitcher] = useState('hide')


    return (
        <div>
            <h5>
                {item.title}
            </h5>
            <p>
                {item.body}
            </p>


            <button onClick={() => {

               if (switcher === 'show'){
                   setSwitcher('hide')
               } else if (switcher === 'hide'){
                   setSwitcher('show')
               }
            }
            }>
                Show comments
            </button>

            <div className={switcher}>
                <Comments ID={item.id}/>
            </div>

        </div>
    );
}








// From Git Hub
// export default function Post({item: {title, body}}) {
//     return (
//         <div>
//             <h5>
//                 {title}
//             </h5>
//             <p>
//                 {body}
//             </p>
//         </div>
//     );
// }