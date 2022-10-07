import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ToDo = () => {
  return (
    <div className='todo'>
      <Link to='/'>
        <FontAwesomeIcon
          style={{ fontSize: '20px', color: 'white', cursor: 'pointer' }}
          icon={faArrowLeft}
        />
      </Link>
      <div className='wrapper'>
        <div className='title'>To Do List</div>
        <form>
          <input />
          <button>Add Task</button>
        </form>
        <div className='task'>
          <div className='taskName'>Get the Grocery</div>
          <div className='taskButton'>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ fontSize: '20px', color: 'white', cursor: 'pointer' }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              style={{ fontSize: '20px', color: 'white', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
