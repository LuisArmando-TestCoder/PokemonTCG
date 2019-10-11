import React from 'react';
import Card from './Card';
import './Details.css'

export default (props) => {
    return (
        <div className='details'>
            <Card onClick={props.click} {...props}/>
            <div>
                {
                    Object.keys(props)
                        .filter(prop => typeof props[prop] === 'string')
                        .map(prop => 
                            <p key={prop}>
                                <b>{prop}:</b> {props[prop]}
                            </p>
                        )
                }
            </div>
        </div>
    )
}