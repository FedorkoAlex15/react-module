import {Link} from "react-router-dom";

export default function User({item, item:{name, id}}){
    return(
        <div>
            {name} -
            {/*<Link to={'/users/' + id}>user details</Link>*/}
            <Link to={

                {
                    pathname: '/users/' + id,
                    state: item
                }

            }>user details</Link>

        </div>
    )
}