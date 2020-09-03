import React from 'react'
import {CounterButton} from './CounterButton/CounterButton'
import classes from './CounterButtons.module.css';

export const CounterButtons = ({counterInfo, handleCounterChange}) => {
    const {type, value} = counterInfo;
    switch(type){
        case "increment":
            return (
                <div className={classes.CounterButton}>
                   <CounterButton value={value} incrDecr="inc" handleCounterChange={handleCounterChange}/>
                </div>
            );
        case "decrement":
            return (
                <div className={classes.CounterButton}> 
                    <CounterButton value={value} incrDecr="dec" handleCounterChange={handleCounterChange}/> 
                </div>
            );
    }

}
