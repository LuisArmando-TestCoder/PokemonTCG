import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import FavoriteCards from './pages/favoriteCards';
import DetailsPage from './pages/a-really-specific-pokemon-card-name-well-just-let-me-say-good-morning-new-york';

const Main = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/favorites' component={FavoriteCards}/>
            <Route path='/details/:card' component={DetailsPage}/>
        </Switch>
    );
}

export default Main;