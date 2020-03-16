import React, {Component, Fragment} from 'react';
import classes from './Admin.scss';
import info from './LogPass';
import AdminPanel from "./AdminPanel";

let uid = "JCJ3hwA0fANJ2t32sj5hbpph8Dm1";

class Admin extends Component {

    render() {
        return (
                <div>
                    {
                        this.props.user && this.props.user.uid === uid
                            ? <AdminPanel/>
                            : <div>You are not Admin</div>
                    }
                </div>

        );
    }
}

export default Admin;
