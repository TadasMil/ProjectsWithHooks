import React from 'react'
import {Project} from './Project/Project'
import classes from './Projects.module.css'
import {Title} from '../Title/Title'

const miniProjects = ["users", "counter"];

export const Projects = () => {
    return (
        <>
            <Title>Mini Projects with Hooks</Title>
            <div className={classes.ProjectList}>
                {miniProjects.map(item => <Project key={item} miniProjects={item}/>)}
            </div>
        </>
    )
}
