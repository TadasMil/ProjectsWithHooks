import React, {useState} from 'react'
import {CounterButtons} from '../../components/Counter/CounterButtons/CounterButtons'
import classes from './Counter.module.css'
import {Title} from '../../components/Title/Title'

const counterValues = [
    {
        id: 1,
        type: "increment",
        value: 1
    },
    {
        id: 2,
        type: "increment",
        value: 5
    }, 
    {
        id: 3,
        type: "decrement",
        value: 5
    },
    {
        id: 4,
        type: "decrement",
        value: 5
    },
]

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleCounterChange = (value, incr) => {
        if(incr === "inc"){
            setCounter(prevCount => prevCount + value)
        } else {
            setCounter(prevCount => prevCount - value)
        }
    }

    return (
        <>
            <Title>Counter application</Title>
            <div className={classes.CounterDisplay}>
                <h3>{counter}</h3>
            </div>

            <div className={classes.CounterButtonList}>
                {
                    counterValues.map(counter => {
                        return <CounterButtons key={counter.id} counterInfo={counter} handleCounterChange={handleCounterChange}/>
                    })
                }
            </div>
        </>
    )
}
