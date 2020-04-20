import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css';

function Navigation() {

    const stl ={
        color: 'white'
    };

  return (

    <nav className="nav">
        <h3>Carlos Diaz</h3>
        <ul className="nav-Links">
            <Link 
                className="links-stl"
                style={stl} to='/'>
                    <li className="link-Container">Home</li>
            </Link>

            <Link
                className="links-stl"
                style={stl} to='/aboutme'>
                    <li>About Me</li>
            </Link>

            <Link 
                className="links-stl"
                style={stl} to='/projects'>
                    <li>Projects</li>
            </Link>

            <Link 
                className="links-stl"
                style={stl} to='/contactme'>
                    <li>Contact Me</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navigation;