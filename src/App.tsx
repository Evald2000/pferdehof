import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Agb from './pages/Agb';
import { useEffect, useState } from 'react';
import Termine from './pages/Termine';
import PriceList from './pages/PriceList';
import Header from './Header';
import Footer from './Footer';
import HeaderMobile from './HeaderMobile';

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
          <Route path="/programm" element={<Termine />} />
          <Route path="/price" element={<PriceList />} />
          <Route path="/allgemeine-geschaeftsbedingungen" element={<Agb />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
