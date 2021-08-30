import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                
                <NavBar />

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/about" component={ AboutScreen } />
                    <Route exact path="/login" component={ LoginScreen } />

                    <Route exact path="/" component={ HomeScreen } />

                    {/* Rutas por default  */}
                    {/* <Route component={ HomeScreen } />  */}
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
