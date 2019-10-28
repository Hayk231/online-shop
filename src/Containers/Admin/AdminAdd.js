import React, {Component} from 'react';
import classes from "./Admin.scss";
import firebase from 'firebase';

class AdminAdd extends Component {

    addProductHandler = () => {
        firebase.database().ref('/products').push({
            name: this.nameRef.value,
            info: this.descRef.value,
            price: this.priceRef.value,
            imageUrl : ''
        }).then(res => console.log(res))
    };

    render() {
        return (
            <div className={classes.admin_add_par}>
                <div className={classes.admin_add_cont}>
                    <label>
                        <div>+</div>
                        <input type='file'/>
                    </label>
                    <div className={classes.admin_add_inputs}>
                        <input type='text' placeholder='Product name' ref={ref => this.nameRef = ref}/>
                        <textarea placeholder='Product info' ref={ref => this.descRef = ref}></textarea>
                        <input type='number' placeholder='Price' step={1000} ref={ref => this.priceRef = ref}/>
                        <button onClick={this.addProductHandler}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminAdd;
