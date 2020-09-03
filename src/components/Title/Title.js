import React from 'react'
import classes from './Title.module.css'

export const Title = (props) => {
    return (
        <div className={classes.Title}>
            <h3>{props.children}</h3>
        </div>
    )
}
