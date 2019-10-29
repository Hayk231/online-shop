import React, {Component} from 'react';
import classes from './Products.scss';
import Product from "../../../../Components/Product/Product";
import firebase from "firebase";

class Products extends Component {

    state = {
        products: []
    };

    componentDidMount() {
        let ref = firebase.database().ref('/products');
        ref.on('value', snapshot => {
            const products = snapshot.val();
            const finArr = [];
            for (let key in products) {
                finArr.push({id: key, info : products[key]})
            }
            this.setState({products: finArr});
        });
    }

    render() {
        console.log(this.state.products)
        return (
            <div className={classes.prod_head}>
                {
                    this.state.products.map(el => {
                        return <Product data={el}/>
                    })
                }
            </div>
        );
    }
}

export default Products;
