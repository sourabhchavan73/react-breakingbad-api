import React from 'react';
import logo  from '../../Images/logo.png'

function Header() {
    return (
        <div className="text-center">
            <img className="logo" src={logo} alt="Logo" />
        </div>
    )
}

export default Header
