import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { Outlet } from 'react-router-dom'
import classes from '../pages/Root.module.css'

export const Root = () => {
    return (
        <>
            <MainNavigation />
            <main className={classes.content}>
            <Outlet/>
            </main>
        </>
    )
}
