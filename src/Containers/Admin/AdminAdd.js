import React, {Component} from 'react';
import classes from "./Admin.scss";
import firebase from 'firebase';

class AdminAdd extends Component {

    state = {
        imageUrl: ''
    };

    componentDidMount() {
        setTimeout(() => {
            this.addRef.classList.add(classes['admin_add_cont_opened'])
        }, 100)
    }

    selectImage = (e) => {
        if (e.target.value) {
            this.setState({imageUrl: URL.createObjectURL(e.target.files[0])})
        }
    };

    removeImageHandler = () => {
        this.setState({imageUrl: ''});
        this.imageInput.value = '';
    };

    addProductHandler = () => {
        debugger
        if (this.nameRef.value && this.descRef.value && this.priceRef.value) {
            const file = this.imageInput.files[0];
            if (file) {
                const storageRef = firebase.storage().ref('/');
                const mainImage = storageRef.child(file.name);
                mainImage.put(file).then(() => {
                    storageRef.child(file.name).getDownloadURL().then((url) => {
                        firebase.database().ref('/products').push({
                            name: this.nameRef.value,
                            info: this.descRef.value,
                            price: this.priceRef.value,
                            imageUrl: url
                        })
                    })
                })
            } else {
                firebase.database().ref('/products').push({
                    name: this.nameRef.value,
                    info: this.descRef.value,
                    price: this.priceRef.value,
                    imageUrl: ''
                })
            }
        } else {
            alert('Please feel all fields')
        }
    };

    render() {
        return (
            <div className={classes.admin_add_par} onClick={this.props.hideAdd}>
                <div className={classes.admin_add_cont} ref={ref => this.addRef = ref}>
                    <label>
                        {
                            this.state.imageUrl ?
                                <div style={{backgroundImage: `url(${this.state.imageUrl})`}}> </div>
                                : <div className={classes.admin_add_img}>+</div>
                        }
                        <input type='file' ref={ref => this.imageInput = ref} accept="image/*" onChange={this.selectImage}/>
                    </label>
                    {this.state.imageUrl ? <button onClick={this.removeImageHandler} className={classes.admin_add_del}>Remove Image</button> : null}
                    <div className={classes.admin_add_inputs}>
                        <input type='text' placeholder='Product name' ref={ref => this.nameRef = ref}/>
                        <textarea placeholder='Product info' ref={ref => this.descRef = ref}></textarea>
                        <input type='number' placeholder='Price' step={1000} ref={ref => this.priceRef = ref} min={1000}/>
                        <button onClick={this.addProductHandler}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminAdd;
