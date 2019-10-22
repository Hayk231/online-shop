import React, {Component} from 'react';
import classes from './Products.scss';
import Product from "../../../../Components/Product/Product";

class Products extends Component {
    render() {
        const prodArr = [1,2,3,4,5,6,7,8,9,10];
        return (
            <div className={classes.prod_head}>
                {
                    prodArr.map(el => {
                        return <Product/>
                    })
                }
            </div>
        );
    }
}

export default Products;
