import React, { useState } from 'react';
import VideoScreenCover from './VideoScreenCover';

const NavBar = () => {
  const [nav, setNav] = useState({
    inital: false,
    click: null,
    navClick: 'Nav',
  });

  const [disable, setDisable] = useState(false);

  const handleNav = () => {
    handleDisable();
    if (nav.inital === false) {
      setNav({
        inital: null,
        click: true,
        navClick: 'Close',
      });
    } else if (nav.click === true) {
      setNav({
        click: !nav.click,
        navName: 'Nav',
      });
    } else if (nav.click === false) {
      setNav({
        click: !nav.click,
        navName: 'Close',
      });
    }
  };

  const handleDisable = () => {
    setDisable(!disable);
    setTimeout(() => {
      setDisable(false);
    }, 800);
  };
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
        <button disabled={disable} onClick={handleNav}>
          What Do You Like to Do Today?
        </button>
      </div>
      <VideoScreenCover state={nav} />
    </div>
  );
};

export default NavBar;
