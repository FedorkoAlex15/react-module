import User from "../user/User";

export default function Users({items, appFn}){


    let fnFather = () => console.log('hello world')


    return(
        <div>

            {
                items.map((value) => {
                    return <User key={value.id}  item={value} appFn={appFn} />
                })

            }


        </div>
    )
}