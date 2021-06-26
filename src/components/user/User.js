export default function User({item, appFn}){


    return(
        <div>
            {item.id} - {item.name} - <button onClick={() => {
                 appFn(item.id)
            }

        }> Click on me </button>
        </div>
    )
}