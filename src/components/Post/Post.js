export default function Post({item, fnFaher}){



    return(

        <div>

            {item.id} -{item.title}  <button onClick={
                fn()
        }>Show a post</button>
        </div>
    )
}