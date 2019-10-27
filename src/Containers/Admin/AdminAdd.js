import React, {Component} from 'react';
import classes from "./Admin.scss";

class AdminAdd extends Component {
    render() {
        return (
            <div className={classes.admin_add_par}>
                <div className={classes.admin_add_cont}>
                    <label>
                        <div>+</div>
                        <input type='file'/>
                    </label>
                    <div className={classes.admin_add_inputs}>
                        <input type='text'/>
                        <textarea></textarea>
                        <input type='number'/>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminAdd;