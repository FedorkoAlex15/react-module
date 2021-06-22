export  default function User({item}){
    return (
        <div>
            <div key={item.id}>
                <h2>The title is :</h2>
                <p>{item.title}</p>
                <h2 >The body is :</h2>
                <p>{item.body}</p>
            </div>

        </div>

    );
}