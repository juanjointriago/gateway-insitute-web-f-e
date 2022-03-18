import React from 'react'
import { Link } from 'react-router-dom'
import { linkComponent } from '../interfaces/global.interfaces'



export const LinkComponent = ({ path, content }: linkComponent) => {
    return (
        <Link style={{marginLeft: '5%',width: '20%'}} to={path} >
            {content}
        </Link>
    )
}
