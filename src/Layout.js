import React from 'react'
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout