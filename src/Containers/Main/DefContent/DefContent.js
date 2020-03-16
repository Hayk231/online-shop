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
                {/*<div className={classes.head_img} style={{backgroundImage : `url(${process.env.PUBLIC_URL + "/Images/house_wall.jpg"})`}}>*/}
                {/*    <div className={classes.home_cont} ref={ref => this.homeCont = ref}>*/}
                {/*        <h1>Welcome to our online store</h1>*/}
                {/*        <Link to={'/shop'}><button>Start Shopping</button></Link>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={classes.head_img}>
                    <video autoPlay muted loop id="myVideo">
                        <source src={process.env.PUBLIC_URL + "/Images/BackVideo.mp4"} type="video/mp4"/>
                    </video>
                    <div className={classes.home_cont} ref={ref => this.homeCont = ref}>
                        <h1>Welcome to our online store</h1>
                        <Link to={'/shop'}><button>Start Shopping</button></Link>
                    </div>
                    <div className={classes.back_over}> </div>
                </div>
            </div>
        );
    }
}

export default DefContent;
