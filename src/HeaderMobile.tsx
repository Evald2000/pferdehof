import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo_dark.png';
import DropdownTest from './DropdownTest';
import DropdownButton from './components/DropdownButton';
import { Modal} from 'flowbite'
import menu from './assets/menu.svg'



function HeaderMobile() {
    
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    const [isOpen, setIsOpen] = useState(false);
    const handleButtonClick = ({ route }: { route: string }) => {
        setIsOpen(!isOpen);
        navigate(route);
    };

    return (
        <div className="fixed top-0 left-0 right-0 h-16 flex items-center bg-header shadow-md px-4 ">
            <img src={logo} alt="Logo" className="h-16 hover:cursor-pointer" onClick={() => navigate('/')} /> {/* Add the logo image */}
            <div className="flex-grow"></div> {/* Spacer to push buttons to the right */}
            

        <button onClick={() => setIsOpen(!isOpen)}><img src={menu} className='h-6'></img></button>
        {isOpen &&
        <div className='h-auto w-40 bg- fixed top-0 right-0 z-50 mt-16 bg-background animate-fadeIn '>
            <button className='HButton text-black' onClick={() => navigate('/')}>Home</button>
            <button className='HButton text-black' onClick={() => handleButtonClick({ route: "/programm" })}>Programm {currentYear}</button>
                <button className='HButton text-black' onClick={() => handleButtonClick({ route: '/price'})}>Preise</button>
                <button className="HButton text-black" onClick={() => handleButtonClick({route: '/contact'})}>Kontakt</button>
                <button className='HButton text-black' onClick={() => handleButtonClick({route: '/'})}>Über uns</button>
            </div>}






        </div>
    );
}

export default HeaderMobile;