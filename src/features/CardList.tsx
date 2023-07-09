import React from 'react';
import {useAppSelector} from "../app/store";
import {CardReducerType} from "../store/card-reducer";
import Cards from "./Card/Cards";

const CardList = () => {
    const cards = useAppSelector<CardReducerType[]>(state => state.card)
    return (
        <div>
            {
                cards.map(el => {
                    return <Cards
                        key={el.id}
                        price={el.price}
                        title={el.title}
                        category={el.category}
                        description={el.description}
                        image={el.image}

                    />
                })
            }
        </div>
    );
};

export default CardList;