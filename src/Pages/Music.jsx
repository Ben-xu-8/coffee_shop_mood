import React from 'react';

const Music = () => {
  return (
    <div className='music'>
      {/* <div className='header'>
        <div className='title'>Koffee Tunes</div>
      </div> */}
      <div className='middle'>
        <div className='navbar'>
          <img src='logo.png' alt='' />
          <div className='navbarItems'>
            <div className='navbarItem'>Koffee Playlist</div>
            <div className='navbarItem'>Trending</div>
            <div className='navbarItem'>Player</div>
            <div className='navbarItem'>Favorite</div>
            <div className='navbarItem'>Genre</div>
          </div>
        </div>
        <div className='musicList'></div>
      </div>
      <div className='bottom'>
        <div className='musicPlayer'></div>
      </div>
    </div>
  );
};

export default Music;
