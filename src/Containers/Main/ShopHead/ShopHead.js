import React, {Component} from 'react';
import Products from "./Products/Products";
import classes from './ShopHead.scss';

class ShopHead extends Component {
    render() {
        console.log(this.props.loggedUser)
        return (
            <div className={classes.shop_head}>
                <Products/>
            </div>
        );
    }
}

export default ShopHead;
