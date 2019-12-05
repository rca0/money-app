import React from 'react'
import Navebar from './navbar'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>M</b>A</span>
            <span className='logo-lg'>
                <i className='fa fa-money'></i>
                <b> Money</b> App
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navebar />
        </nav>
    </header>
)
