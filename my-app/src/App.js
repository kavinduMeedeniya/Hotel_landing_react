import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About_us';

import Gallery from './pages/Gallery'; // Import the Gallery component



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />


      </Routes>
    </Router>
  );
}

export default App;
