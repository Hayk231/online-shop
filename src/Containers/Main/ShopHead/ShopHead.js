import React, {Component} from 'react';
import Products from "./Products/Products";

class ShopHead extends Component {
    render() {
        return (
            <div style={{padding: '50px', backgroundColor: '#ececec'}}>
                <Products/>
            </div>
        );
    }
}

export default ShopHead;
