import React from 'react';
import classes from './Quote.module.css';

export const Quote = ({quoteInfo}) => {
    const {en, author} = quoteInfo;
    return (
        <div className={classes.Quote}>
            <h4>{en}</h4>
            <h6>-{author}</h6>
        </div>
    )
}