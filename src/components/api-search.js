import React from 'react';

export default ({change, click}) =>
<div>
    <input onChange={change}/>
    <button onClick={click}>Display cards</button>
</div>