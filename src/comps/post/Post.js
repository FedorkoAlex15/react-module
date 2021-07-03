import {Link} from "react-router-dom";

export default function Post({items}){



    return(
        <div>

            {items.title} - <Link to={

            {
                pathname: '/posts/' + items.id,
                state: items
            }
        }>Show posts</Link>




        </div>

    )
}