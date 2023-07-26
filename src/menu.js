import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Menu = ()=>{
    return (
        <nav>
            <ul>
        {routes.map(_route => (
                <li key={_route.to}>
                    <NavLink 
                    style={({isActive}) => ({color: isActive?  'red' : 'blue'})}
                    to={_route.to}>
                        {_route.text}
                    </NavLink>
                </li>
        ))}

                {/* <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link to="/blog">Blog</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link to="/profile  ">Profile</Link>
                </li> */}
                {/* <li>
                    <NavLink 
                    className={({isActive})=> ''}
                    style={({isActive}) => ({color: isActive?  'red' : 'blue'})}
                    to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink 
                    style={({isActive}) => ({color: isActive?  'red' : 'blue'})}
                    to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink
                    style={({isActive}) => ({color: isActive?  'red' : 'blue'})}
                    to="/profile">Profile</NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

const routes = []

routes.push({
    to: '/',
    text: 'Home'
})

routes.push({
    to: '/blog',
    text: 'Blog'
})

routes.push({
    to: '/profile',
    text: 'Profile'
})

export {Menu}