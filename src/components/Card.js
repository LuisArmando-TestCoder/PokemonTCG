import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default (props) =>
<div>
    <input type="checkbox" className="btn-favorite" 
        onChange={e => props.toggleShow(e.target.checked)}/>
    <Link to={{ pathname: `/details/${props.id}`, props }}>
        <button className="card" onClick={props.click}>
            <img src={props.imageUrl} name={props.name} alt={props.name}/>
        </button>
    </Link>
</div>