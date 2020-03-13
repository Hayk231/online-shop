import React, {Component} from 'react';
import classes from './Favours.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import firebase from 'firebase';

class Favour extends Component {

    removeFromFavours = (id) => {
        firebase.database().ref('/user_products/' + this.props.userId).child(id).remove().then()
    };

    render() {
        let backUrl = this.props.showData.imageUrl || process.env.PUBLIC_URL + '/Images/no-image-home.png';
        return (
            <div className={classes.favour_child}>
                <div style={{backgroundImage: `url(${backUrl})`}} className={classes.favour_child_img}> </div>
                <div className={classes.favour_child_cont}>
                    <div>{this.props.showData.name}</div>
                    <div>{this.props.showData.info}</div>
                    <div>{this.props.showData.price + ' AMD'}</div>
                </div>
                <div className={classes.favour_child_remove} onClick={() => this.removeFromFavours(this.props.delId)}>
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
            </div>
        );
    }
}

export default Favour;