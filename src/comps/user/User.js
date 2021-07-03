import {Link, Route} from "react-router-dom";


export default function User({item}){

    return (
        <div>
            {item.name} - <Link to={

            {
                pathname: '/users/' + item.id,
                state: item
            }
        }>



               Show the posts
            </Link>
        </div>
    )

}