import React, { useEffect, useRef } from 'react';

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
            <li className='calendar'>Calendar</li>
            <li className='todo'>To Do List</li>
            <li className='music' onMouseEnter={handleVideo}>
              Music
            </li>
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
