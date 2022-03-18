import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinkComponent } from '../interfaces/global.interfaces'

export const NavLinkComponent = ({ path, content }: navLinkComponent) => {
    return (
        <NavLink
            className={({ isActive }) => 'nav-item nav-link ' + (isActive && 'active')}
            to={path}
        >
            {content}
        </NavLink>
    )
}
