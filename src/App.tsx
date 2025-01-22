import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Agb from './pages/Agb';
import { useEffect } from 'react';

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
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allgemeine-geschaeftsbedingungen" element={<Agb />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
