import './Simpson.css';
export default function Simpson({item: {name, surname, age, photo, info}}){





    return(
        <div className={'target'}>

            <h2>{name} {surname}</h2>
            <img src={photo} alt=""/>
            <div>{info}</div>



        </div>

    )
}