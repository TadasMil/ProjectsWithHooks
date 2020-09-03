import React, {useState} from 'react'
import {NewUser} from '../../components/Users/NewUser/NewUser'
import classes from './HandleUser.module.css'
import { v4 as uuid } from 'uuid';
import { UsersList } from '../../components/Users/UsersList';
import {Title} from '../../components/Title/Title'

const HandleUser = () => {
    const [users, handleUserList] = useState([])

    const insertNewUser = (firstName, secondName, email) => {
        handleUserList([...users,
            {
            id: uuid(),
            firstName,
            secondName,
            email
            }
        ])
    }

    const removeUser = (id) => {
        const getValidUsers = users.filter(user => user.id !== id);
        handleUserList([...getValidUsers]);
    }
    
    return (
      <>
        <Title>Users with Hooks</Title>
        <div className={classes.NewUserHandler}>
            <NewUser insertNewUser={insertNewUser}/>
            <UsersList users={users} removeUser={removeUser} />
        </div>
      </>
    )
}

export default HandleUser;
