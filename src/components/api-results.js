import React from 'react';
import './api-results.css';

export default ({ children }) => {
    const inner = children.props.children;
    return (
        <React.Fragment>
            {
                typeof inner === 'string' ?
                <div className='json-format' dangerouslySetInnerHTML={{__html: inner}}/>
                :
                <div className='grid-format'>{inner}</div>
            }
        </React.Fragment>
    );
}