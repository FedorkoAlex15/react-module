import '../Comments.css'
export default function Comment({item}){

    return(
        <div className={'box'}>
            <h3> {item.name}</h3>
            <p>{item.email}</p>
            <p>{item.body}</p>
        </div>
    )
}