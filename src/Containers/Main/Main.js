import React, {Component} from 'react';
import Header from "./Header/Header";
import DefContent from "./DefContent/DefContent";
import {Switch, Route} from "react-router-dom";
import ShopHead from "./ShopHead/ShopHead";
import Admin from "../Admin/Admin";

class Main extends Component {

    state = {
        user: null
    };

    saveUserHandler = (user) => {
        this.setState({user: user})
    };

    render() {
        return (
            <div>
                <Header saveUser={this.saveUserHandler}/>
                <Switch>
                    <Route exact path='/en' component={DefContent}/>
                    <Route exact path='/en/shop' render={(props) => <ShopHead {...props} loggedUser={this.state.user} />}/>
                    <Route exact path='/admin' component={Admin}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
