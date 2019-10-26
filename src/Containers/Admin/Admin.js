import React, {Component, Fragment} from 'react';
import classes from './Admin.scss';
import info from './LogPass';
import AdminPanel from "./AdminPanel";

class Admin extends Component {

    state = {
        isOpened: false,
        correct: 'none'
    };

    openAdmin = (e) => {
        e.preventDefault();
        if (this.logRef.value === info.login && this.passRef.value === info.pass) {
            this.setState({isOpened: false})
        } else {
            this.setState({correct : 'block'})
        }
    };

    render() {
        return (
            <Fragment>
                {
                    this.state.isOpened ?
                        <div className={classes.admin}>
                            <form className={classes.log_form} onSubmit={this.openAdmin}>
                                <h1>Admin Panel</h1>
                                <p style={{display: this.state.correct}}>Incorrect Username or Password</p>
                                <input type='text' placeholder='Username' ref={ref => this.logRef = ref}/>
                                <input type='password' placeholder='Password'
                                       ref={ref => this.passRef = ref} autoComplete="on"/>
                                <button>Sign In</button>
                            </form>
                        </div>
                        :
                        <AdminPanel/>
                }
            </Fragment>

        );
    }
}

export default Admin;
