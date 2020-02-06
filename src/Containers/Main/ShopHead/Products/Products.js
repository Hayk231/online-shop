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
            console.log(finArr)
            this.setState({products: finArr});
        });
    }

    render() {
        return (
            <div className={classes.prod_head}>
                {
                    this.state.products.map(el => {
                        return <Product data={el} key={el.id}/>
                    })
                }
            </div>
        );
    }
}

export default Products;
