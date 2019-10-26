import React, {Component} from 'react';
import classes from '../../Containers/Main/ShopHead/Products/Products.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

class Product extends Component {
    render() {
        return (
            <div className={classes.product}>
                <div className={classes.img_div}> </div>
                <div className={classes.cont_div}>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <p>Carolina single 04026503</p>
                    <p>Price</p>
                    <p>500000 AMD</p>
                </div>
            </div>
        );
    }
}

export default Product;
