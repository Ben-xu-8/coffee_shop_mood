import React, { useState, useRef, useEffect } from 'react';
import VideoScreenCover from './VideoScreenCover';

const NavBar = () => {
  let button = useRef(null);

  const [click, setClick] = useState(false);

  const handleNav = () => {
    setClick(true);
  };

  const handleReturn = () => {
    setClick(false);
  };

  useEffect(() => {
    if (click === false || click === null) {
      button.style.display = 'flex';
    } else {
      button.style.display = 'none';
    }
  });

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='logo'>
            <img src='logo.png' alt='' />
          </div>
        </div>
      </div>
      <div className='dropdownbar'>
        <button ref={(el) => (button = el)} onClick={handleNav}>
          What Do You Like to Do Today?
        </button>
      </div>
      <VideoScreenCover click={click} handleReturn={handleReturn} />
    </div>
  );
};

export default NavBar;
