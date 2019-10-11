import React, { useState } from 'react';
import fetchCards from '../services/fetchCards';
import Card from './Card';
import Details from './Details';
import './Cards.css';

export default () => {
    const [cards, setCards] = useState([]);
    const [details, setDetails] = useState('');

    fetchCards()
    .then(d => setCards(d.cards.map(card => 
        <Card click={() => setDetails(card)} key={card.id} {...card}/>
    )))

    return (
        <React.Fragment>
            { 
                details ? 
                <Details click={() => setDetails(false)} {...details}/>
                :
                <div className="cards">{cards}</div>
            }
        </React.Fragment>
    );
}