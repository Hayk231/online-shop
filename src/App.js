import React, { Component } from 'react';
import classes from './App.scss';
import Main from "./Containers/Main/Main";
import {Switch, Route, Redirect} from "react-router-dom";
import Admin from "./Containers/Admin/Admin";



class App extends Component{

    render() {
        return (
            <div className={classes.App}>
                <Switch>
                    <Redirect exact from="/" to="/en" />
                    <Route path='/en' component={Main}/>
                    <Route exact path='/admin' component={Admin}/>
                </Switch>
            </div>
        );
    }
}

export default App;
