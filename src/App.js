import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
      
  )
}

export default App;
