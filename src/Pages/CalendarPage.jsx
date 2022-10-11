import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import ReactDatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CalendarPage = (props) => {
  const events = [{}];
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);

  const handleEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div className='calendar'>
      <div className='entry'>
        <div className='back'>
          <Link to='/'>
            <FontAwesomeIcon
              style={{ fontSize: '20px', color: 'white' }}
              icon={faArrowLeft}
            />
          </Link>
        </div>
        <div className='title'>Calendar</div>
      </div>
      <div className='calendarEvent'>
        <ScheduleComponent height='650px'>
          <Inject
            services={[Month, Week, WorkWeek, Day, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default CalendarPage;
