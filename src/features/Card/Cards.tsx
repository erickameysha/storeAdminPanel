import React from 'react';


type CardType ={

    title:string
    price:string
    category:string
    description: string
    image: string

}
const Cards = (props: CardType) => {
    return (
        <div>

            <h1>{props.title}</h1>
            <p>{props.price}</p>
            <p>{props.category}</p>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title}/>
        </div>
    );
};

export default Cards;