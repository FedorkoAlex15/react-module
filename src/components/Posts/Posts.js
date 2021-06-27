import Post from "../Post/Post";

export default function Posts({items, appFn}){






    return (
        <div>
            {
             items.map(value => {
                return <Post item={value}  appFn={appFn}/>
             })
            }
        </div>
    )
}
