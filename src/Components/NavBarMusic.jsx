import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faArrowTrendUp,
  faPlay,
  faChartSimple,
  faStar,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBarMusic = () => {
  return (
    <div className='navbar'>
      <div className='back'>
        <Link to='/'>
          <FontAwesomeIcon
            style={{
              fontSize: '20px',
              color: 'white',
              cursor: 'pointer',
            }}
            icon={faArrowLeft}
          />
        </Link>
      </div>
      <div className='image'>
        <img src='logo.png' alt='' />
      </div>
      <div className='navbarItems'>
        <div className='navbarItem'>
          <div className='icon'>
            <Link to='/playlist'>
              <FontAwesomeIcon
                style={{
                  fontSize: '20px',
                  color: 'white',
                  cursor: 'pointer',
                }}
                icon={faMusic}
              />
            </Link>
            <div className='navTitle'>Koffee Playlist</div>
          </div>
        </div>
        <div className='navbarItem'>
          <div className='icon'>
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                cursor: 'pointer',
              }}
              icon={faArrowTrendUp}
            />
            <div className='navTitle'>Trending</div>
          </div>
        </div>
        <div className='navbarItem'>
          <div className='icon'>
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                cursor: 'pointer',
              }}
              icon={faPlay}
            />
            <div className='navTitle'>Player</div>
          </div>
        </div>
        <div className='navbarItem'>
          <div className='icon'>
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                cursor: 'pointer',
              }}
              icon={faStar}
            />
            <div className='navTitle'>Favorite</div>
          </div>
        </div>
        <div className='navbarItem'>
          <div className='icon'>
            <FontAwesomeIcon
              style={{
                fontSize: '20px',
                color: 'white',
                cursor: 'pointer',
              }}
              icon={faChartSimple}
            />
            <div className='navTitle'>Genre</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarMusic;
