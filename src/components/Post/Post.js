export default function Post({item, appFn}){


    return(

        <div>

            {item.id} -{item.title}  <button onClick={
            ()=> appFn(item.id)
        }>Click on me</button>
        </div>
    )
}