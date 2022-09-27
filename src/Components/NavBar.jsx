import React from 'react';
import VideoScreenCover from './VideoScreenCover';

const NavBar = () => {
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
        <button>What Do You Like to Do Today?</button>
      </div>
      <VideoScreenCover />
    </div>
  );
};

export default NavBar;
