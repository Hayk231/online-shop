import React, {Component} from 'react';
import classes from './Header.scss';
import {Link} from "react-router-dom";

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../../firebaseConfig';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons/faUserCircle";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Header extends Component {

    componentDidMount() {
        document.addEventListener("mousedown", this.handleOutClick);
    }

    handleOutClick = (e) => {
        let pop = document.getElementById('userPop');
        let icon = document.getElementById('userIcon');
        if (pop.style.display === 'flex') {
            if (this.popRef.contains(e.target) || e.target === icon) {
                return;
            }
            this.closeUserPop()
        }
    };

    scrollTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.user !== this.props.user ) {
            this.props.saveUser(this.props.user);
        }
    }

    signInHandler = () => {
        this.props.signInWithGoogle().then(res => {})
    };

    openUserPopup = () => {
        let pop = document.getElementById('userPop');
            pop.style.display = 'flex';
    };

    closeUserPop = () => {
        let pop = document.getElementById('userPop');
        pop.style.display = 'none';
    };

    render() {
        let favours = this.props.userProducts ? this.props.userProducts.length : '';

        return (
            <div className={classes.header}>
                <img src={'/Images/head-logo.png'} onClick={this.scrollTopHandler} alt={'logo'}/>
                <div className={classes.connect}>
                    {
                        this.props.user ?
                            <Link to='/en/favours'>
                                <div className={classes.user_favours}>
                                    <span>{favours}</span>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </div>
                            </Link>
                            : null
                    }
                    <div className={classes.connect_cont} ref={ref => this.popRef = ref}>
                        <FontAwesomeIcon icon={faUserCircle} onClick={this.openUserPopup} id='userIcon'/>
                        <div className={classes.user_info} id='userPop'>
                            {
                                this.props.user ?
                                    <div className={classes.user_logged}>
                                        <img src={this.props.user.photoURL} alt={'profPic'}/>
                                        <span>{this.props.user.displayName}</span>
                                        <button onClick={this.props.signOut} className={classes.outButt}>Sign Out</button>
                                    </div>
                                    :
                                    <div className={classes.user_login} onClick={this.signInHandler}>
                                        <div>
                                            <FontAwesomeIcon icon={faGoogle}/>
                                        </div>
                                        <span>LOGIN WITH GOOGLE</span>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Header);
