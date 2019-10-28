import React, {Component} from 'react';
import classes from './Admin.scss';
import AdminAdd from "./AdminAdd";
import firebase from 'firebase';


class AdminPanel extends Component {

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

        return (
            <div className={classes.admin_panel}>
                <AdminAdd/>
                <div>Add product</div>
                <div className={classes.list_cont}>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(el => {
                                    return (
                                        <tr key={el.id}>
                                            <td><img src={el.info.imageUrl} style={{height: '30px', width: '40px'}} alt='asd'/></td>
                                            <td>{el.info.name}</td>
                                            <td>{el.info.info}</td>
                                            <td>{el.info.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminPanel;
