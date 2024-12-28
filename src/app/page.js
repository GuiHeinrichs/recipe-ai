'use client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/page';
import CulinaryChat from './culinaryChat/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culinaryChat" element={<CulinaryChat />} />
      </Routes>
    </Router>
  );
}

export default App;