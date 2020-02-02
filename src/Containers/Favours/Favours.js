import React, {Component} from 'react';
import Favour from "./Favour";
import classes from './Favours.scss';

class Favours extends Component {

    render() {
        return (
            <div className={classes.favour_head}>
                <div className={classes.favours_par}>
                    {
                        this.props.userProducts ?
                            this.props.userProducts.map(el => {
                                return (
                                    <Favour showData={el.data.info} delId={el.key} key={el.key} userId={this.props.user.uid}/>
                                )
                            })
                            :
                            <div>Nothing To Show</div>
                    }
                </div>
            </div>
        );
    }
}

export default Favours;