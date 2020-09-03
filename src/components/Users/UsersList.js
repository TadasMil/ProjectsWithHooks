import React from 'react'
import {User} from './User/User'
import classes from './UsersList.module.css'

export const UsersList = ({users, removeUser}) => {

    return (
        <div className={classes.UsersList}>
            {
                users.map(user => <User key={user.id} userInfo={user} removeUser={removeUser} />)
            }
        </div>
    )
}
