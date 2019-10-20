import React, {Component} from 'react';
import Header from "./Header/Header";
import DefContent from "./DefContent/DefContent";
import {Switch, Route} from "react-router-dom";
import ShopHead from "./ShopHead/ShopHead";

class Main extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={DefContent}/>
                    <Route exact path='/shop' component={ShopHead}/>
                </Switch>
            </div>
        );
    }
}

export default Main;