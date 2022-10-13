import React from 'react';
import NavBarMusic from '../Components/NavBarMusic';

const Music = () => {
  return (
    <div className='music'>
      <NavBarMusic />
      <div className='middle'>
        <div className='musicList'></div>
      </div>
      <div className='bottom'>
        <div className='musicPlayer'></div>
      </div>
    </div>
  );
};

export default Music;
