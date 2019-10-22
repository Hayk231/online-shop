import React, { Component } from 'react';
import classes from './App.scss';
import Main from "./Containers/Main/Main";


class App extends Component{

    render() {
        return (
            <div className={classes.App}>
                <Main/>
            </div>
        );
    }
}

export default App;
