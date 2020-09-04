import React from 'react';
import {Quote} from '../Quote/Quote'
import classes from './QuoteList.module.css';

export const QuotesList = ({quotes}) => {
    return (
        <div className={classes.QuoteList}>
            {
                quotes.map(quote => <Quote key={quote.id} quoteInfo={quote}/>)
            }
        </div>
    )
}