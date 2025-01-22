import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Agb from './pages/Agb';

function App() {
  return (
    <div>
      <Router>
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
