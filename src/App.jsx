import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import Project from './pages/projects';
import Contact from './pages/contact';
import Services from './pages/services';
import About from './pages/about';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
