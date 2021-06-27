import Post from "../Post/Post";

export default function Posts({items}){


console.log({items})



    return (
        <div>
            {
             items.map(value => {
                return <Post item={value} fnFaher={} />
             })
            }
        </div>
    )
}
