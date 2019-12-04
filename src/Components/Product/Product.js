import React, {Component} from 'react';
import classes from '../../Containers/Main/ShopHead/Products/Products.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

class Product extends Component {
    render() {
        return (
            <div className={classes.product} key={this.props.data.id}>
                <div className={classes.img_div} style={{backgroundImage: `url(${this.props.data.info.imageUrl})`}}> </div>
                <div className={classes.cont_div}>
                    <FontAwesomeIcon icon={faShoppingCart}/>
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
