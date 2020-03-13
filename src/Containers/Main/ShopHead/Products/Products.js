import React, {Component, Fragment} from 'react';
import classes from './Products.scss';
import Product from "../../../../Components/Product/Product";
import Spinner from "../../../../Components/Spinner/Spinner";
import firebase from "firebase";

class Products extends Component {

    state = {
        products: null
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

        return (
            <Fragment>
                {
                    this.state.products ?
                        <div className={classes.prod_head}>
                            {
                                this.state.products.map(el => {
                                    let isFavour = false;
                                    if (this.props.userProducts) {
                                        this.props.userProducts.map(userEl => {
                                            if (el.id === userEl.data.id) {
                                                isFavour = true
                                            }
                                        })
                                    }
                                    return <Product data={el} key={el.id} userId={this.props.userId}
                                                    isFavour={isFavour}/>
                                })
                            }
                        </div>
                        :
                        <Spinner/>
                }
            </Fragment>
        );
    }
}

export default Products;
