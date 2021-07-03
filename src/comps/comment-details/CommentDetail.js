export default function CommentDetail(props){
    let {location: {state}} = props

    return(
        <div>
           <p>{state.id}</p>
            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>
            <p>Comment: {state.body}</p>

        </div>
    )
}
