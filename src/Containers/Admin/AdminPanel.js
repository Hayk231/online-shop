import React, {Component} from 'react';
import classes from './Admin.scss';
import AdminAdd from "./AdminAdd";
class AdminPanel extends Component {
    render() {

        let arr = [
            {image : 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg', name: 'name', desc: 'description', price: '500000'},
            {image : 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg', name: 'name', desc: 'description', price: '500000'},
            {image : 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg', name: 'name', desc: 'description', price: '500000'},
            {image : 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg', name: 'name', desc: 'description', price: '500000'},
            {image : 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg', name: 'name', desc: 'description', price: '500000'}
        ];

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
                                arr.map(el => {
                                    return (
                                        <tr>
                                            <td><img src={el.image} style={{height: '30px', width: '40px'}} alt='asd'/></td>
                                            <td>{el.name}</td>
                                            <td>{el.desc}</td>
                                            <td>{el.price}</td>
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