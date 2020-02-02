import React, {Component} from 'react';
import classes from '../../Containers/Main/ShopHead/Products/Products.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as regFaHeart} from "@fortawesome/free-regular-svg-icons/faHeart";
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import firebase from 'firebase';

class Product extends Component {

    addToFavourites = (prod) => {
        if(this.props.userId) {
            let newPostKey = firebase.database().ref().child('/user_products/' + this.props.userId).push().key;
            const pushData = {key: newPostKey, data: prod};
            firebase.database().ref('/user_products/' + this.props.userId).child(newPostKey).set(pushData).then()
        }
    };

    render() {
        let backUrl = '/Images/no-image-home.png';
        if (this.props.data.info.imageUrl) {
            backUrl = this.props.data.info.imageUrl
        }

        return (
            <div className={classes.product} key={this.props.data.id}>
                <div className={classes.img_div}
                     style={{backgroundImage: `url(${backUrl})`}}>
                </div>
                <div className={classes.cont_div}>
                    {
                        this.props.isFavour ?
                            <FontAwesomeIcon icon={faHeart}/>
                            :
                            <FontAwesomeIcon icon={regFaHeart} onClick={() => this.addToFavourites(this.props.data)}/>
                    }
                    <p>{this.props.data.info.name}</p>
                    <p>{this.props.data.info.info}</p>
                    <p>Price</p>
                    <p>{this.props.data.info.price + ' AMD'}</p>
                </div>
            </div>
        );
    }
}

export default Product;
