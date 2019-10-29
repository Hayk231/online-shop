import React, {Component} from 'react';
import classes from './Admin.scss';
import AdminAdd from "./AdminAdd";
import firebase from 'firebase';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";


class AdminPanel extends Component {

    state = {
        products: [],
        openAdd: false
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

    hideAdd = (e) => {
        if (e.target.classList.contains(classes['admin_add_par'])) {
            this.setState({openAdd: false});
        }
    };

    render() {

        return (
            <div className={classes.admin_panel}>
                {this.state.openAdd ? <AdminAdd hideAdd={this.hideAdd}/> : null}
                <div onClick={() => this.setState({openAdd : true})} className={classes.admin_add_cont_top}>Add</div>
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
                                            <td>
                                                {
                                                    el.info.imageUrl ?
                                                        <img src={el.info.imageUrl}
                                                             style={{height: '30px', width: '40px'}} alt='asd'/>
                                                             : <FontAwesomeIcon icon={faTimesCircle}/>
                                                }
                                            </td>
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
