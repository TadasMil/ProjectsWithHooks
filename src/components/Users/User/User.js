import React from 'react'
import classes from './User.module.css'
import {RiDeleteBin6Fill} from 'react-icons/ri'

export const User = ({userInfo, removeUser}) => {
    const {id, firstName, secondName, email} = userInfo;
    return (
        <div className={classes.UserInfo}>
            <h3 onClick={() => removeUser(id)}><RiDeleteBin6Fill/></h3>
            <h2>Name: {firstName}</h2> 
            <h4>Surrname: {secondName}</h4>
            <h5>Email: {email}</h5>
        </div>
    )
}
