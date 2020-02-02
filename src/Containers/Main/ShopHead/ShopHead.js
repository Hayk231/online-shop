import React, {Component} from 'react';
import Products from "./Products/Products";
import classes from './ShopHead.scss';

class ShopHead extends Component {
    render() {
        let userId = this.props.loggedUser ? this.props.loggedUser.uid : null;

        return (
            <div className={classes.shop_head}>
                <Products userId={userId} userProducts={this.props.userProducts}/>
            </div>
        );
    }
}

export default ShopHead;
