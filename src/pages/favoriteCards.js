import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default (props) => {
    return (
        <div className='details'>
            <Link to='/'>Home</Link>
            <div className='details__wrapper'>
                {
                    props.location.favoriteCards.map(card => <Card key={card.id} {...card}/>)
                }
            </div>
        </div>
    )
}