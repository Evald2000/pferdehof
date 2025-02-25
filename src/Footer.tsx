import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
const Footer = () => {

    const navigate = useNavigate();
    return (



        <footer className="bg-headerdark mt-14">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://example.com/" className="flex items-center">
                            <img src={logo} className="h-16 me-3" alt="Lehcleite Logo" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-300">Kontakt</h2>
                            <ul className="text-gray-50 font-medium">
                                <li className="">
                                    <p className=" font-bold">Islandpferde Lechleite</p>
                                </li>
                                <li>
                                    <p className="">Schützenstraße 114</p>
                                </li>
                                <li>
                                    <p className="">86316 Friedberg</p>
                                </li>
                                <li>
                                    <p className="">Deutschland</p>
                                </li>
                                <li>
                                    <p className="">T: +49 (0)821 603330</p>
                                </li>
                                <li>
                                    <p className="">E: info@lechleite.de</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-300">Rechtliches</h2>
                            <ul className="text-gray-50 font-medium">
                                <li className="">
                                    <a onClick={() => navigate('/allgemeine-geschaeftsbedingungen')}  className="hover:underline hover:cursor-pointer">Allgemeine Geschäftsbedingungen</a>
                                </li>
                                <li className="">
                                    <a onClick={() => navigate('/impressum')} className="hover:underline hover:cursor-pointer">Impressum</a>
                                </li>
                                <li className="">
                                    <a onClick={() => navigate('/datenschutz')} className="hover:underline hover:cursor-pointer">Datenschutz</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </footer>

    );
}

export default Footer;