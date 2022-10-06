import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

const CalendarPage = (props) => {
  const events = [{}];
  let formats = {
    timeGutterFormat: 'HH:mm',
  };
  const localizer = momentLocalizer(moment);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);

  const handleEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div className='calendar'>
      <div className='entry'>
        <div className='title'>Calendar</div>
        <div className='inputTime'>
          <input
            className='inputValue'
            type='text'
            placeholder='Event Name'
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <ReactDatePicker
            className='inputValue'
            selectsStart
            placeholderText='Start Date'
            selected={newEvent.startDate}
            onChange={(startDate) => setNewEvent({ ...newEvent, startDate })}
          />
          <ReactDatePicker
            className='inputValue'
            selectsEnd
            placeholderText='End Date'
            selected={newEvent.endDate}
            onChange={(endDate) => setNewEvent({ ...newEvent, endDate })}
          />
          <button onClick={handleEvent}>Submit</button>
        </div>
      </div>
      <Calendar
        formats={formats}
        localizer={localizer}
        events={allEvents}
        startAccessor='startDate'
        endAccessor='endDate'
      />
    </div>
  );
};

export default CalendarPage;
