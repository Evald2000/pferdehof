import { HashRouter as Router, Routes, Route, useLocation, UNSAFE_getPatchRoutesOnNavigationFunction } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Agb from './pages/Agb';
import { useEffect, useState } from 'react';
import Termine from './pages/Termine.js';
import PriceList from './pages/PriceList';
import Header from './Header';
import Footer from './Footer';
import HeaderMobile from './HeaderMobile';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import UnserHof from './pages/unserHof';
import Team from './pages/Team';
import Pferde from './pages/Pferde';
import TermineNeu from './pages/TermineNeu';

function App() {
  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return null;
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div>
      <Router>
       {isMobile ? <HeaderMobile></HeaderMobile> :  <Header></Header>}
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programm" element={<TermineNeu />} />
          <Route path="/price" element={<PriceList />} />
          <Route path="/allgemeine-geschaeftsbedingungen" element={<Agb />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/der-hof" element={<UnserHof />} />
          <Route path="/team-lechleite" element={<Team />} />
          <Route path="/unsere-pferde" element={<Pferde />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
