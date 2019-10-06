import React from 'react';

export default ({card, click}) =>

<img onClick={click}
    alt={card.name}
    src={card.imageUrl}/>