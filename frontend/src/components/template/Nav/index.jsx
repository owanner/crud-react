import React from 'react'
import {Link} from 'react-router-dom'
import {FaUsers, FaHome} from 'react-icons/fa'

import './nav.css'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <FaHome className="mr-2"/>
                Início
            </Link>
            <Link to="/users">
                <FaUsers className="mr-2"/>
                Usuários
            </Link>
        </nav>
    </aside>