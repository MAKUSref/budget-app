import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Charts from '../components/Charts';
import Settings from '../components/Settings';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const RouterApp = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/charts" component={Charts} />
                <Route path="/settings" component={Settings} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default RouterApp;