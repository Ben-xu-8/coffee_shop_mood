import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import {
  faArrowLeft,
  faPenToSquare,
  faTrash,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    const taskJSON = localStorage.getItem('tasks');
    const getTasks = JSON.parse(taskJSON);
    if (getTasks.length > 0) {
      setTasks(getTasks);
    }
  }, []);

  useEffect(() => {
    const taskJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', taskJSON);
  }, [tasks]);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: task,
      completed: false,
    };
    setTasks([...tasks].concat(newTask));
    setTask('');
  };

  const deleteTask = (id) => {
    const updatedTask = [...tasks].filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  const handleEdit = (id) => {
    const updatedTask = [...tasks].map((task) => {
      if (task.id === id) {
        task.text = editText;
      }
      return task;
    });
    setTasks(updatedTask);
    setEdit(null);
    setEditText('');
  };

  const toggleCheck = (id) => {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className='objective'>
      <div className='todoCalendar'>
        <div className='calendar'>
          <div className='entry'>
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
            <div className='title'>Calendar</div>
          </div>
          <div className='calendarEvent'>
            <ScheduleComponent height='650px'>
              <Inject
                services={[
                  Month,
                  Week,
                  WorkWeek,
                  Day,
                  Agenda,
                  Resize,
                  DragAndDrop,
                ]}
              />
            </ScheduleComponent>
          </div>
        </div>
        <div className='todo'>
          <div className='wrapper'>
            <div className='title'>To Do List</div>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleInput}
                placeholder='Add a Task'
                value={task}
              />
              <button>Add Task</button>
            </form>
            <div className='task'>
              {tasks.map((task) => (
                <div>
                  <input
                    type='checkbox'
                    onChange={() => toggleCheck(task.id)}
                    checked={task.completed}
                    style={{
                      fontSize: '20px',
                      margin: '20px',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  />
                  {edit === task.id ? (
                    <input
                      onChange={(e) => setEditText(e.target.value)}
                      value={editText}
                      placeholder='Add a Task'
                    />
                  ) : (
                    <div>{task.text}</div>
                  )}

                  <div className='taskButton'>
                    {edit === task.id ? (
                      <div>
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          style={{
                            fontSize: '20px',
                            padding: '10px',
                            color: 'white',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleEdit(task.id)}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => deleteTask(task.id)}
                          style={{
                            fontSize: '20px',
                            padding: '10px',
                            color: 'white',
                            cursor: 'pointer',
                          }}
                        />
                      </div>
                    ) : (
                      <div>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          style={{
                            fontSize: '20px',
                            padding: '10px',
                            color: 'white',
                            cursor: 'pointer',
                          }}
                          onClick={() => setEdit(task.id)}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => deleteTask(task.id)}
                          style={{
                            fontSize: '20px',
                            padding: '10px',
                            color: 'white',
                            cursor: 'pointer',
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
