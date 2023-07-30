import React from "react";
import {Link, NavLink} from 'react-router-dom'
import { useAuth } from "./auth";

const Menu = ()=>{
    const auth = useAuth()


    return (
        <nav>
            <ul>
        {routes.map(_route => {
            if(_route.private && !auth.user) return null
            if(_route.to === '/login' && auth.user) return null
            
            return (  <li key={_route.to}>
                <NavLink 
                style={({isActive}) => ({color: isActive?  'red' : 'blue'})}
                to={_route.to}>
                    {_route.text}
                </NavLink>
            </li>)
        })}

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
    text: 'Home',
    private: false
})

routes.push({
    to: '/blog',
    text: 'Blog',
    private: false
})

routes.push({
    to: '/profile',
    text: 'Profile',
    private: true
})

routes.push({
    to: '/login',
    text: 'Login',
    private: false
})

routes.push({
    to: '/logout',
    text: 'Logout',
    private: true
})

export {Menu}