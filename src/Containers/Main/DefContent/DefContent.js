import React, {Component} from 'react';
import {Link} from "react-router-dom";
import classes from './DefContent.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

class DefContent extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.homeCont.classList.add(classes['opened'])
        }, 500)
    }

    scrollToContent = () => {
        window.scrollTo(0, this.defContentRef.offsetTop - 55)
    };

    render() {
        return (
            <div className={classes.content}>
                <div className={classes.head_img}>
                    <video autoPlay muted loop id="myVideo">
                        <source src={process.env.PUBLIC_URL + "/Images/BackVideo.mp4"} type="video/mp4"/>
                    </video>
                    <div className={classes.home_cont} ref={ref => this.homeCont = ref}>
                        <h1>Welcome to our online store</h1>
                        <Link to={'/shop'}><button>Start Shopping</button></Link>
                    </div>
                    <div className={classes.back_over}>
                        <div onClick={() => this.scrollToContent()}>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </div>
                </div>
                <div ref={ref => this.defContentRef = ref} style={{marginBottom: '1500px'}}>
                    <h1 id='content'>Content</h1>
                </div>
            </div>
        );
    }
}

export default DefContent;
