import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../components/Details';

export default (props) => {
    delete props.location.pathname;
    delete props.location.search;
    delete props.location.hash;

    return (
        <div>
            <Link to='/'>Home</Link>
            <Details {...props.location.props}/>
        </div>
    );
}