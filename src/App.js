import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home open={open} toggle={toggle} />} />
          <Route
            path='/*'
            element={
              <div className='flex justify-center align-middle items-center mt-16 mx-auto'>
                404
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
