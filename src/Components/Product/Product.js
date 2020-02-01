import React, {Component} from 'react';
import classes from '../../Containers/Main/ShopHead/Products/Products.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons/faHeart";

class Product extends Component {

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
                    <FontAwesomeIcon icon={faHeart}/>
                    <p>{this.props.data.info.name}</p>
                    <p>{this.props.data.info.info}</p>
                    <p>Price</p>
                    <p>{this.props.data.info.price}</p>
                </div>
            </div>
        );
    }
}

export default Product;
