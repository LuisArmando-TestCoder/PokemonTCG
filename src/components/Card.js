import React from 'react';
import './Card.css';

export default ({ imageUrl, name, click }) =>

<button className="card" onClick={click}>
    <img src={imageUrl} name={name} alt={name}/>
</button>
