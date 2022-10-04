import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

const CalendarPage = (props) => {
  const events = [{}];
  const localizer = momentLocalizer(moment);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);

  const handleEvent = () => {
    setAllEvents([...allEvents, newEvent]);
    console.log(allEvents);
  };

  return (
    <div className='calendar'>
      <div className='title'>Calendar</div>
      <div className='inputTime'>
        <input
          type='text'
          placeholder='Event Name'
          valuye={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <ReactDatePicker
          selectsStart
          placeholderText='Start Date'
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <ReactDatePicker
          selectsEnd
          placeholderText='End Date'
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button onClick={handleEvent}>Submit</button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor='start'
        endAccessor='end'
      />
    </div>
  );
};

export default CalendarPage;
