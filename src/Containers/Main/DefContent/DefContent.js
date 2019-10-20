import React, {Component} from 'react';
import {Link} from "react-router-dom";
import classes from './DefContent.scss';

class DefContent extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.homeCont.classList.add(classes['opened'])
        }, 500)
    }

    render() {
        return (
            <div className={classes.content}>
                <div className={classes.head_img}>
                    <div className={classes.home_cont} ref={ref => this.homeCont = ref}>
                        <h1>Welcome to our online store</h1>
                        <Link to={'/shop'}><button>Start Shopping</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default DefContent;