import React, {Component} from 'react';
import Products from "./Products/Products";

class ShopHead extends Component {
    render() {
        return (
            <div style={{padding: '30px'}}>
                <Products/>
            </div>
        );
    }
}

export default ShopHead;