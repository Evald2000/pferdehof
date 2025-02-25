import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DropdownTestProps {
  label: string;
}

const DropdownTest: React.FC<DropdownTestProps> = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false); // Close dropdown after selecting
  };

  return (
    <div className="relative inline-block" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>

      <button className={isOpen === true ? 'DropdownbuttonActiv' : 'Dropdownbutton'}>{label}</button>
      {isOpen && (

        <ul className='absolute left-0 w-full bg-lightBrown list-none m-0 rounded-b-md shadow-md transition-opacity duration-150 ease-in-out animate-slide-in-down'>
          <button className='py-3 cursor-pointer border-black w-full hover:scale-105 
          text-white duration-300  ' onClick={() => handleSelect('option1')}>Veranstaltungen</button>
          <button className='py-3 cursor-pointer border-black w-full hover:scale-105 
          text-white duration-300  ' onClick={() => navigate('/termine')}>Termine</button>

        </ul>
      )}
    </div>
  );
}

export default DropdownTest; 