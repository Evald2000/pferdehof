import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import menu from './assets/menu.svg';
import DropdownMenu from './components/DropdopwnMenu';
import dropdownIcon from './assets/dropdown_icon.png';

function HeaderMobile() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = ({ route }: { route: string }) => {
    setIsOpen(false);
    navigate(route);
  };

  const handleDropdownClick = (route: string) => {
    setIsDropdownOpen(false);
    navigate(route);
    setIsOpen(false);
  };

  const dropdownItems = [
    { label: 'Unser Hof', route: '/der-hof' },
    { label: 'Team Lechleite', route: '/team-lechleite' },
    { label: 'Unsere Pferde', route: '/unsere-pferde' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-16 flex items-center bg-header shadow-md px-4 z-[1]">
      <img src={logo} alt="Logo" className="h-16 hover:cursor-pointer" onClick={() => navigate('/')} />
      <div className="flex-grow"></div>
      <button onClick={() => setIsOpen(!isOpen)}><img src={menu} className='h-6'></img></button>
      {isOpen && (
        <div className='h-auto w-40 fixed top-0 right-0 mt-16 bg-background animate-fadeIn rounded-md rounded-t-none shadow-md border-2 border-t-0'>
          <button className='HButton text-black bg-inherit' onClick={() => handleButtonClick({ route: '/' })}>Home</button>
          <button className='HButton text-black' onClick={() => handleButtonClick({ route: "/programm" })}>Programm {currentYear}</button>
          <button className='HButton text-black' onClick={() => handleButtonClick({ route: '/price' })}>Preise</button>
          <button className='HButton text-black' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Über uns <img className=' ml-2 mt-1 h-2' src={dropdownIcon}></img> </button>
          {isDropdownOpen && <DropdownMenu items={dropdownItems} onItemClick={handleDropdownClick} />}
        </div>
      )}
    </div>
  );
}

export default HeaderMobile;