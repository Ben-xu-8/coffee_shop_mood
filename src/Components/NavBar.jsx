import React from 'react';

const NavBar = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='left'>
          <div className='logo'></div>
        </div>
      </div>
      <div className='dropdownbar'>
        <button>What Do You Like to Do Today?</button>
      </div>
    </div>
  );
};

export default NavBar;
