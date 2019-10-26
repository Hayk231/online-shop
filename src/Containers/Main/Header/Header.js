import React, {Component} from 'react';
import classes from './Header.scss';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Header extends Component {

    render() {
        return (
            <div className={classes.header}>
                <img src={'/Images/head-logo.png'}/>
                <div className={classes.connect}>
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
