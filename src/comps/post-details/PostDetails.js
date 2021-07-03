export default function PostDetails(props){

    let {location: {state}} = props;



    return(
        <div>
            <p>{state.id}</p>
            <p>{state.title}</p>
            <p>{state.body}</p>
        </div>
    )
}


