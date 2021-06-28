import User from "../User/User";


export default function Users({items}){




    return(
        <div>

            {items.map((value) => {
              return  <User key={value} items={value} />
             })}

        </div>
    )
}















// From Git Hub
// import User from "../User/User";
//
// export default function Users({item, showPosts, posts}) {
//     return (
//         <div>
//             {item.map(value => <User key={value.id} item={value}/>)}
//         </div>
//     );
// }
//







