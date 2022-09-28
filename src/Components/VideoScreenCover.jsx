import React, { useEffect, useRef } from 'react';

const VideoScreenCover = ({ state }) => {
  let navMenu = useRef(null);

  const handleSubmit = () => {
    navMenu.style.display = 'none';
  };

  useEffect(() => {
    if (state.click === false) {
      navMenu.style.display = 'none';
    } else if (state.click === true || (state.click && state.inital === null)) {
      navMenu.style.display = 'block';
    }
  });
  return (
    <div ref={(el) => (navMenu = el)} className='videoScreenCover'>
      <div className='backgroundColor'></div>
      <div className='menu'>
        <div className='background'></div>
        <div className='backgroundVideo'>
          <div className='menuContainer'>
            <div className='wrapper'>
              <div className='menuOptions'>
                <nav>
                  <ul>
                    <li>Calendar</li>
                    <li>To Do List</li>
                    <li>Music</li>
                    <li>
                      <button onClick={handleSubmit}>Back</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoScreenCover;
