'use client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/page';
import CulinaryChat from './culinaryChat/page';
import PersonalSetup from './personalSetup/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culinaryChat" element={<CulinaryChat />} />
        <Route path="/personalSetup" element={<PersonalSetup />} />
      </Routes>
    </Router>
  );
}

export default App;