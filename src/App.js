import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CalendarPage from './Pages/CalendarPage';
import Home from './Pages/Home';
import Journal from './Pages/Journal';
import ToDo from './Pages/ToDo';
import Music from './Pages/Music';
import './style.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/calendarpage' element={<CalendarPage />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/music' element={<Music />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
