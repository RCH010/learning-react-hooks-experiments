import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
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
                <div className='container'>
                    <Switch>
                        {/* con el prop exact, hace que sea literal */}
                        <Route exact path='/about' component={ AboutScreen }/>
                        <Route exact path='/login' component={ LoginScreen }/>
                        <Route exact path='/' component={ HomeScreen }/>
                        <Redirect to='/'/>  {/* Cuelquier otro cae aqui */}
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
