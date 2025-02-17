import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo_dark.png';
import DropdownTest from './DropdownTest';
import DropdownButton from './components/DropdownButton';

function Header() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <div className="fixed top-0 left-0 right-0 h-16 flex items-center bg-header shadow-md px-14">
            <img src={logo} alt="Logo" className="h-16" /> {/* Add the logo image */}
            <div className="flex-grow"></div> {/* Spacer to push buttons to the right */}
            <div className="flex space-x-10">
                <button className='HButton' onClick={() => navigate('/')}>Home</button>
                <DropdownTest label={"Programm " + currentYear} />
                <button className='HButton' onClick={() => navigate('/price')}>Preise</button>
                <button className="HButton" onClick={() => navigate('/contact')}>Kontakt</button>
                <button className='HButton' onClick={() => navigate('/')}>Über uns</button>
            </div>
        </div>
    );
}

export default Header;