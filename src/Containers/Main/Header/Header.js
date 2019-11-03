import React, {Component} from 'react';
import classes from './Header.scss';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../../firebaseConfig';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Header extends Component {

    scrollTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    render() {
        return (
            <div className={classes.header}>
                <img src={'/Images/head-logo.png'} onClick={this.scrollTopHandler} alt={'logo'}/>
                <div className={classes.connect}>
                    <FontAwesomeIcon icon={faShoppingBasket}/>
                    {
                    this.props.user ?
                        <div>
                            <img src={this.props.user.photoURL} alt={'profPic'}/>
                            <span>{this.props.user.displayName}</span>
                            <button onClick={this.props.signOut} className={classes.outButt}>Sign Out</button>
                        </div>
                        : <button onClick={this.props.signInWithGoogle} className={classes.inButt}>Sign In</button>
                    }
                </div>
            </div>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Header);
