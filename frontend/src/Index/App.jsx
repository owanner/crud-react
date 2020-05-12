import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import './App.css'

import Routes from './routes'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default props =>
    <div className="app">
        <BrowserRouter>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </BrowserRouter>
    </div>