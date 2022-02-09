import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink exact activeClassName='active' className='nav-link' to='./'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName='active' className='nav-link' to='./about'>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName='active' className='nav-link' to='./login'>Login</NavLink>
                </li>
            </ul>
            
            </div>
        </nav>
    )
}
// el <Link> y el <NavLink> son lo mismo, solo que con navlink podemos especificar la clase que va si esta activa
