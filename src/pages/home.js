import React, { useState } from 'react';

import ApiSearchInput from '../components/api-search-input';
import ApiResults from '../components/api-results';
import CardImage from '../components/card-image';

const Home = () => {
    const [results, setResults] = useState([]);
    const apiBase = 'https://api.pokemontcg.io/v1/';
    let isJson = false;
    let jsonResponse = '';

    function renderResponse(response) {
        if(jsonResponse !== response) {
            jsonResponse = response;
            if(jsonResponse && !isJson)
                setResults(response.cards.map((card, i) => 
                    <CardImage
                        key={i}
                        click={() => {
                            isJson = true;
                            displayResults(`cards/${card.id}`);
                        }} card={card}/>
                ));
            else if(jsonResponse)
                setResults(JSON.stringify(response, null, 2)
                    .replace(/ /g, '<span class="space">_</span>')
                    .replace(/\n/g, '<br/>\n')
                    .replace(/^(.*)$/g, c => {
                        console.log(c);
                        return c;
                    }));
        }
    }

    function displayResults(value) {
        fetch(`${apiBase}${value}`)
        .then(d => d.json())
        .then(renderResponse);
    }

    return (
        <main>
            <ApiSearchInput
                apiBase={apiBase}
                display={displayResults}
                search={() => isJson = false }
                showJson={() => isJson = true }
            />
            <ApiResults>
                <div>{results}</div>
            </ApiResults>
        </main>
    );
}

export default Home;