import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fetchCards from '../services/fetchCards';
import Card from './Card';
import Details from './Details';
import Search from './Search';
import './Cards.css';

let willBegin = true;

export default () => {
    const [cards, setCards] = useState([]);
    const [details, setDetails] = useState('');
    const [favoriteCards, setFavoriteCards] = useState([]);
    // warning, buggy
    if (willBegin) fetchCards().then(({ cards }) => { 
        willBegin = false;
        setCards(cards)
    });

    function searchPokemon(value) {
        fetchCards(`?name=${value}`).then(({ cards }) => setCards(cards));
    }

    function addCard(card, checked) {
        if (checked) {
            favoriteCards.push(card);
        }
        else favoriteCards.splice(favoriteCards.indexOf(card), 1);
        setFavoriteCards(favoriteCards);
    }

    return (
        <div className="cards-wrapper">
            {
                !details ? 
                    <React.Fragment>
                        <Search key={1} search={searchPokemon} placeholder='Look up 4 a pokemon'/>
                        <Link to={{ pathname: '/favorites', favoriteCards }}>Show favorites</Link>
                    </React.Fragment>
                    : null
            }
            
            {
                details ?
                <Details click={() => setDetails(false)} {...details}/>
                :
                <div className="cards">
                    {
                        cards.map(card => <Card toggleShow={checked => addCard(card, checked)} 
                            click={() => setDetails(card)} key={card.id} {...card}/>)
                    }
                </div>
            }
        </div>
    );
}