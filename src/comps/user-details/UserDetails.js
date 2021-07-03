export default function UserDetails(props){

    let {location: {state}} = props;

    return(
        <div>
            <p>Name: {state.name}</p>
            <p>Surname: {state.username}</p>
            <p>Email: {state.email}</p>
        </div>
    )
}