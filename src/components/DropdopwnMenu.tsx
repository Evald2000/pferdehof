

import React, { FC } from 'react';

interface DropdownMenuProps {
  items: { label: string; route: string }[];
  onItemClick: (route: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, onItemClick }) => {
  return (
    <div className="absolute right-0 mt-0 w-36 bg-background shadow-lg rounded-b-md shadow-lg z-50">
      {items.map((item, index) => (
        <button
          key={index}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          onClick={() => onItemClick(item.route)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default DropdownMenu;