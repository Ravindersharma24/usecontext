import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import UserState from './context/User/UserState';

const App = () => {
  return (
    <BrowserRouter>
    <UserState>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </UserState>
    </BrowserRouter>
  )
}

export default App