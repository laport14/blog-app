import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">PostApp</NavLink>
                <div className="links">
                    <NavLink className="link" to="/posts">Posts</NavLink>
                    <NavLink className="link" to="/add-post">Add Post</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav