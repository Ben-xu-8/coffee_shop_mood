import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

const VideoScreenCover = ({ click, handleReturn }) => {
  let navMenu = useRef(null);

  const handleVideo = () => {
    console.log('hi');
  };

  useEffect(() => {
    console.log(click);
    if (click === true) {
      navMenu.style.display = 'block';
    } else {
      navMenu.style.display = 'none';
    }
  });
  return (
    <div ref={(el) => (navMenu = el)} className='videoScreenCover'>
      <div className='wrapper'>
        <div className='backgroundVideo'></div>
        <nav>
          <ul className='list'>
            <Link
              to='/calendarpage'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <li>Calendar</li>
            </Link>
            <Link to='/todo' style={{ textDecoration: 'none', color: 'white' }}>
              <li>To Do List</li>
            </Link>
            <Link to='/todo' style={{ textDecoration: 'none', color: 'white' }}>
              <li>Journal</li>
            </Link>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              <li onMouseEnter={handleVideo}>Music</li>
            </Link>
            <li>
              <button onClick={handleReturn}>Back</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default VideoScreenCover;
