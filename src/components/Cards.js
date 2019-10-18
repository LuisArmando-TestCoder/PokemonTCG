import React, { useState } from 'react';
import fetchCards from '../services/fetchCards';
import Card from './Card';
import Details from './Details';
import Search from './Search';
import Button from './Button';
import './Cards.css';

let willBegin = true;

export default () => {
    const [cards, setCards] = useState([]);
    const [details, setDetails] = useState('');
    const [favoriteCards, setFavoriteCards] = useState([]);
    const [doShow, setDoShow] = useState(false);
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
        console.log(favoriteCards);
    }

    return (
        <div className="cards-wrapper">
            {
                !details ? 
                    [ 
                        <Search key={1} search={searchPokemon} placeholder='Look up 4 a pokemon'/>, 
                        <Button key={2} click={() => setDoShow(!doShow)} content={ doShow ? 'Do not' : 'Show favorites' }/> 
                    ] : null }
            
            {
                details ? 
                <Details click={() => setDetails(false)} {...details}/>
                :
                <div className="cards">
                    { 
                        doShow ?
                        favoriteCards.map(card => <Card toggleShow={checked => addCard(card, checked)} 
                            click={() => setDetails(card)} key={card.id} {...card}/>)
                        :
                        cards.map(card => <Card toggleShow={checked => addCard(card, checked)} 
                            click={() => setDetails(card)} key={card.id} {...card}/>)
                    }
                </div>
            }
        </div>
    );
}