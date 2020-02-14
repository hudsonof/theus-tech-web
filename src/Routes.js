import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Login from './components/Login';
import Admin from './components/Admin';
import GalleryUpload from './components/GalleryUpload';

import { AuthProvider } from "./Auth";

import PrivateRoute from "./PrivateRoute";

const Routes = () => (
    <AuthProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/admin" component={Admin} />
                <PrivateRoute path="/upload" component={GalleryUpload} />
            </Switch>
        </BrowserRouter>
    </AuthProvider>
);

export default Routes;