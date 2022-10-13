import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CalendarPage from './Pages/CalendarPage';
import Home from './Pages/Home';
import Journal from './Pages/Journal';
import ToDo from './Pages/ToDo';
import Music from './Pages/Music';
import './style.scss';
import Playlist from './Components/Playlist';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/calendarpage' element={<CalendarPage />} />
          <Route path='/task' element={<ToDo />} />
          <Route path='/music' element={<Music />} />
          <Route path='/playlist' element={<Playlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
