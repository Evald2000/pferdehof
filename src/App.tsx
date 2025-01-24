import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Agb from './pages/Agb';
import { useEffect } from 'react';
import Termine from './pages/Termine';
import PriceList from './pages/PriceList';
import Header from './Header';

function App() {
  const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return null;
  };
  return (
    <div>
      <Router>
        <Header></Header>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termine" element={<Termine />} />
          <Route path="/price" element={<PriceList />} />
          <Route path="/allgemeine-geschaeftsbedingungen" element={<Agb />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
