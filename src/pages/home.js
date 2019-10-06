import React, { useState } from 'react';
import ApiSearch from '../components/api-search';
// import ApiResults from '../components/api-results';
import CardImage from '../components/card-image';

export default () => {
    const [value, setValue] = useState();
    const [cards, setCards] = useState();

    function fetchCards() {
        fetch(`https://api.pokemontcg.io/v1/${value}`)
        .then(r => r.json())
        .then(response => {
            if(response.cards) {
                setCards(response.cards.map((card, i) =>
                    <CardImage key={i} {...card}/>
                ))
            }
        });
    }

    return (
        <main>
            <ApiSearch
            change={(e) => setValue(e.target.value)}
            click={fetchCards}
            />
            <div>{cards}</div>
        </main>
    );
}