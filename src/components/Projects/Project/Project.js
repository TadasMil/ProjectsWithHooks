import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Project.module.css'

export const Project = ({miniProjects}) => {
   switch(miniProjects){
       case "users":
           return (
                <div className={classes.Project}>
                    <Link to='/users'>Users Projects</Link>
                </div>
           );
        case "counter":
            return (
                <div className={classes.Project}>
                    <Link to='/counter'>Counter project</Link>
                </div>
            );
        case "quotes":
            return (
                <div className={classes.Project}>
                    <Link to='/quotes'>Programming Quotes API</Link>
                </div>
            );
   }
}
