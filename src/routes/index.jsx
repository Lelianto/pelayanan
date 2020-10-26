import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import HomePage from '../pages/HomePage';

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/id/:id' component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}
export default MainRoute;