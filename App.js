import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './components/Home';
import Navbar from './components/Navbar'
function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes >
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
