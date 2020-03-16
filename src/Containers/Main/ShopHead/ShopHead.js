import React, {Component} from 'react';
import Products from "./Products/Products";
import classes from './ShopHead.scss';

class ShopHead extends Component {

    state = {
        pageSet: 0,
    };

    componentDidMount() {
        let scrollBar = document.getElementById('topScroll');
        this.shopHead.addEventListener('scroll', (e) => {
            this.scrollHandler(e, scrollBar)
        });
    }

    scrollHandler = (e, scBar) => {
        let winScroll = e.target.scrollTop || e.target.scrollTop;
        let height = e.target.scrollHeight - e.target.clientHeight;
        let scrolled = (winScroll / height) * 100;
        scBar.style.width = scrolled + '%'
    };

    render() {
        let userId = this.props.loggedUser ? this.props.loggedUser.uid : null;

        return (
            <div className={classes.shop_head} ref={ref => this.shopHead = ref}>
                <div className={classes.top_scroll} id='topScroll'> </div>
                <Products userId={userId} userProducts={this.props.userProducts}/>
            </div>
        );
    }
}

export default ShopHead;
