import React from 'react';

export default ({search, placeholder}) =>

<input onChange={e => search(e.target.value)} type="search" placeholder={placeholder}/>