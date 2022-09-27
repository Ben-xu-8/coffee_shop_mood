import React from 'react';

const VideoScreenCover = () => {
  return (
    <div className='videoScreenCover'>
      <div className='backgroundColor'></div>
      <div className='menu'>
        <div className='background'></div>
      </div>

      <div className='menuContainer'>
        <div className='wrapper'>
          <div className='menuOptions'>
            <nav>
              <ul>
                <li>Calendar</li>
                <li>To Do List</li>
                <li>Music</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoScreenCover;
