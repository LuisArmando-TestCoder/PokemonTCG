import React from 'react';
import './Card.css';

export default ({ imageUrl, name, click, toggleShow }) =>

<div>
    <input type="checkbox" className="btn-favorite" 
        onChange={e => toggleShow(e.target.checked)}/>
    <button className="card" onClick={click}>
        <img src={imageUrl} name={name} alt={name}/>
    </button>
</div>