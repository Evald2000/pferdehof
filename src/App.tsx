
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div>
    <p>keklol</p>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;