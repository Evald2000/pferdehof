import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

function Header() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 z-50 right-0 h-16 flex items-center bg-header shadow-md px-14">
      <img
        src={logo}
        alt="Logo"
        className="h-16 hover:cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex-grow"></div>
      <div className="flex space-x-10">
        <button className="HButton" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="HButton" onClick={() => navigate("/programm")}>
          Programm {currentYear}
        </button>
        <button className="HButton" onClick={() => navigate("/anmeldung")}>
          Anmelden
        </button>
        <button className="HButton" onClick={() => navigate("/price")}>
          Preise
        </button>
        <div className="relative">
          <button
            ref={triggerRef}
            className="HButton"
            onClick={() => setIsOpen(!isOpen)}
          >
            Über uns
          </button>
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50"
            >
              <button
                onClick={() => {
                  navigate("/der-hof");
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                Unser Hof
              </button>
              <button
                onClick={() => {
                  navigate("/team-lechleite");
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
              >
                Team Lechleite
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;