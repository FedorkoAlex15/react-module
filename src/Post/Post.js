export default function Post({items}){


    return(
        <div>
            <div><strong>Title:</strong> {items.title}</div>
            <div><strong>Body:</strong> {items.body}</div>
        </div>
    )
}