import React from 'react';

export default ({search}) =>

<input onChange={e => search(e.target.value)} type="search" placeholder="Look up for a pokemon"/>