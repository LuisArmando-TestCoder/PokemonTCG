import React, { useState } from 'react';
import fetchCards from '../services/fetchCards';
import Card from './Card';
import Details from './Details';
import Search from './Search';
import './Cards.css';

let willBegin = true;

export default () => {
    const [cards, setCards] = useState([]);
    const [details, setDetails] = useState('');

    if (willBegin) {
        willBegin = false;
        fetchCards()
        .then(({ cards }) => setCards(cards.map(card => 
            <Card click={() => setDetails(card)} key={card.id} {...card}/>
        )));
    }
    

    function searchPokemon(value) {
        fetchCards(`?name=${value}`)
        .then(({ cards }) => setCards(cards.map(card => 
            <Card click={() => setDetails(card)} key={card.id} {...card}/>
        )));
    }

    return (
        <div className="cards-wrapper">
            <Search search={searchPokemon}/>
            { 
                details ? 
                <Details click={() => setDetails(false)} {...details}/>
                :
                <div className="cards">{cards}</div>
            }
        </div>
    );
}