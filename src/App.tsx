
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
      </Routes>
    </Router>
  );
}

export default App;