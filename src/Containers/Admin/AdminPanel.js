import React, {Component} from 'react';
import classes from './Admin.scss';
import AdminAdd from "./AdminAdd";
import firebase from 'firebase';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


class AdminPanel extends Component {

    state = {
        products: [],
        openAdd: false,
        editId: null
    };

    componentDidMount() {
        document.addEventListener('touchmove', this.handleTouch);
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

    handleTouch = (e) => {
        console.log(e)
    };

    hideAdd = (e, isButt) => {
        if (!isButt) {
            if (e.target.classList.contains(classes['admin_add_par'])) {
                this.setState({openAdd: false});
            }
        } else {
            this.setState({openAdd: false});
        }
    };

    editProduct = (el) => {
        this.setState({editId: el.id})
    };

    deleteProduct = (el) => {
        firebase.database().ref('/products').child(el.id).remove().then();
    };

    saveChanges = (index, id) => {
        let inputs = Array.from(document.getElementsByName('input' + index));
        if(inputs[1].value && inputs[0].value && inputs[2].value) {
            const pushData = {
                info: inputs[1].value,
                name: inputs[0].value,
                price: inputs[2].value

            };
            firebase.database().ref('/products').child(id).update(pushData).then(() => {
                this.setState({editId: null})
            });
        } else {
            inputs.map(el => {
                if (!el.value) {
                    el.style.border = '1px solid #ff0000bf';
                }
            });
        }

    };

    cancelEdit = (index, el) => {
        let inputs = Array.from(document.getElementsByName('input' + index));
        inputs[0].value = el.info.name;
        inputs[1].value = el.info.info;
        inputs[2].value = el.info.price;
        this.setState({editId: null})
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map((el, index) => {
                                    let canEdit = el.id !== this.state.editId;
                                    let canEditClass = !canEdit ? 'input_can_edit' : '';
                                    return (
                                        <tr key={el.id} className={classes[canEditClass]}>
                                            <td>
                                                {
                                                    el.info.imageUrl ?
                                                        <img src={el.info.imageUrl}
                                                             style={{height: '30px', width: '40px'}} alt='asd'/>
                                                             : <FontAwesomeIcon icon={faTimesCircle}/>
                                                }
                                            </td>
                                            <td><input type='text' name={'input' + index} defaultValue={el.info.name}
                                                       readOnly={canEdit}/></td>
                                            <td><input type='text' name={'input' + index} defaultValue={el.info.info}
                                                       readOnly={canEdit}/></td>
                                            <td><input type='text' name={'input' + index} defaultValue={el.info.price}
                                                       readOnly={canEdit}/></td>
                                            <td>
                                                {
                                                    canEdit ?
                                                        <div>
                                                            <FontAwesomeIcon
                                                                icon={faPencilAlt}
                                                                onClick={() => this.editProduct(el)}
                                                                title='Edit'
                                                            />
                                                            <FontAwesomeIcon
                                                                icon={faTrashAlt}
                                                                onClick={() => this.deleteProduct(el)}
                                                                title='Delete'
                                                            />
                                                        </div>
                                                        :
                                                        <div>
                                                            <FontAwesomeIcon
                                                                icon={faCheck}
                                                                style={{color: 'green'}}
                                                                onClick={() => this.saveChanges(index, el.id)}
                                                                title='Change'
                                                            />
                                                            <FontAwesomeIcon
                                                                icon={faTimes}
                                                                onClick={() => this.cancelEdit(index, el)}
                                                                title='Cancel'
                                                            />
                                                        </div>
                                                }

                                            </td>
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
