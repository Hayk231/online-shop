import React, { Component } from 'react';
import classes from './App.scss';
import Main from "./Containers/Main/Main";
import {Route} from "react-router-dom";



class App extends Component{

    render() {
        return (
            <div className={classes.App}>
                <Route path='/' component={Main}/>
            </div>
        );
    }
}

export default App;
