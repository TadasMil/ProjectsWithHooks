import React from 'react'
import classes from './CounterButton.module.css'

export const CounterButton = ({value, incrDecr, handleCounterChange}) => {

    const increment = (
        <div className={classes.Button}>
            <h3 onClick={() => handleCounterChange(value, incrDecr)}>+{value}</h3>
        </div>
    )

    const decrement = (
        <div className={classes.Button}>
            <h3 onClick={() => handleCounterChange(value, incrDecr)}>-{value}</h3>
        </div>
    )
    return (
            <>
                {incrDecr === "inc" ? increment : decrement}
            </>
    )
}
