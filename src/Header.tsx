
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo_org.jpg';
import DropdownTest from './DropdownTest'; // Ensure the correct import

function Header() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <div className="absolute fixed top-0 left-0 right-0 h-16 flex flex-row bg-header shadow-md justify-between items-center">
              <img src={logo} alt="Logo" className="h-16" />
            <div className="flex my-auto mx-10 space-x-10 flex-grow">
            
                <button className='HButton' onClick={() => navigate('/')}>Home</button>
                <DropdownTest label={"Veranstaltungen " + currentYear} />
                <button className="HButton" onClick={() => navigate('/contact')}>Kontakt</button>
            </div>
           
        </div>
    );
}

export default Header;