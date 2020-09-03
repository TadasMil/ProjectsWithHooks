import React, {useState} from 'react'
import classes from './NewUser.module.css'

export const NewUser = ({insertNewUser}) => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstName("");
        setSecondName("");
        setEmail("");
        insertNewUser(firstName, secondName, email);
    }

    return (
        <form className={classes.NewUser} onSubmit={handleSubmit}>
            <input type="text" value={firstName} placeholder="First name" onChange={(e) => setFirstName(e.target.value)}></input>
            <input type="text" value={secondName} placeholder="Second name" onChange={(e) => setSecondName(e.target.value)}></input>
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
           <div>
            <input type="submit"></input>
           </div>
        </form>
    )
}
