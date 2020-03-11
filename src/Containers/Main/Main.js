import React, {Component} from 'react';
import Header from "./Header/Header";
import DefContent from "./DefContent/DefContent";
import {Switch, Route} from "react-router-dom";
import ShopHead from "./ShopHead/ShopHead";
import Admin from "../Admin/Admin";
import firebase from 'firebase';
import Favours from "../Favours/Favours";

class Main extends Component {

    state = {
        user: null,
        userProducts: null
    };

    saveUserHandler = (user) => {
        if (user) {
            this.setState({user: user}, () => {
                let ref = firebase.database().ref('/user_products');
                ref.on('value', snapshot => {
                    const userProducts = snapshot.val()[this.state.user.uid];
                    const finArr = [];
                    for (let key in userProducts) {
                        finArr.push(userProducts[key])
                    }
                    this.setState({userProducts: finArr});
                });
            })
        } else {
            this.setState({user: null, userProducts: null});
        }
    };

    render() {
        return (
            <div>
                <Header saveUser={this.saveUserHandler} userProducts={this.state.userProducts}/>
                <Switch>
                    <Route exact path='/' component={DefContent}/>
                    <Route exact path='/shop' render={(props) =>
                        <ShopHead {...props} loggedUser={this.state.user} userProducts={this.state.userProducts}/>
                    }/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route exact path='/favours' render={(props) =>
                        <Favours {...props} userProducts={this.state.userProducts} user={this.state.user}/>
                    }/>
                </Switch>
            </div>
        );
    }
}

export default Main;
