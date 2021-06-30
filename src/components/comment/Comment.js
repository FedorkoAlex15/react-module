export default function Comment({items}){


    return(
        <div>
            <h2>Comment {items.id}</h2>
            <p>Name {items.name}</p>
            <p>Email {items.email}</p>
            <p>Comment {items.body}</p>
            <hr/>
        </div>
    )
}