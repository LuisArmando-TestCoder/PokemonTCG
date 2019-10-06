import React from 'react';

export default (props) =>

<section>
    <img alt={props.name}
        src={props.imageUrlHiRes}/>
    <h2>{props.name}</h2>
    <div>
        <small>{props.supertype} - {props.subtype}</small>
        <span>HP {props.hp}</span>
        {props.attacks.map(attack =>
            <div>
                <h4>{attack.name}</h4>
                <p>{attack.text}</p>
                <span>Costs: {attack.cost.map(cost => 
                    <small>{cost}</small>    
                )}</span>
                <small>Damage: {attack.damage}</small>
                <small>Converted energy cost: {attack.damage}</small>
            </div>
        )}
    </div>
</section>