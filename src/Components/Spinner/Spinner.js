import React from 'react';
import classes from './Spinner.scss';

const spinner = () => (
    <div className={classes.par}>
        <div className={classes.main}>
            <span className={classes.spinner}></span>
        </div>
    </div>

);

export default spinner;