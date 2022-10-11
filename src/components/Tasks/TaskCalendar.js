import PropTypes from 'prop-types';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Moment is used react-big-calendar for date formatting and stuff
import moment from 'moment';
// DO NOT REMOVE moment locale, it is used by react-big-calendar
// to format dates according to user localization
// and sets 'monday' first of week
import 'moment/locale/fr';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Trash, ArrowUpCircle } from 'react-feather';
import Modal from '../Modal';

function TaskCalendar({ taskEvents }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState({});

  const localizer = momentLocalizer(moment);

  const clickRef = useRef(null);

  useEffect(() => () => {
    window.clearTimeout(clickRef?.current);
  }, []);

  const onSelectEvent = useCallback((calEvent) => {
    window.clearTimeout(clickRef?.current);
    clickRef.current = window.setTimeout(() => {
      setData(calEvent);
      setModalIsOpen(true);
    }, 250);
  }, []);

  console.log('data changé:', data);

  const messages = {
    date: 'Date',
    time: 'Heure',
    event: 'Évènement',
    allDay: '',
    week: 'Semaine',
    work_week: 'Semaine de travail',
    day: 'Jour',
    month: 'Mois',
    previous: 'Précédent',
    next: 'Suivant',
    yesterday: 'Hier',
    tomorrow: 'Demain',
    today: 'Aujourd\'hui',
    agenda: 'Planning',

    noEventsInRange: 'Pas d\'évènement dans ces dates',

    showMore: (total) => `+${total} autre(s)`,
  };

  // function handleclick update
  const handleClickUpdate = () => {
    console.log('Update');
  };

  // function handleclick delete
  const handleClickDelete = () => {
    console.log('A la poubelle !');
  };

  return (
    <>
      <Calendar
        events={taskEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.AGENDA, Views.MONTH]}
        localizer={localizer}
        defaultView={Views.AGENDA}
        defaultDate={moment().toDate()}
        messages={messages}
        hideTimeIndicator
        popup
        onSelectEvent={onSelectEvent}
      />

      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        <button type="button" onClick={handleClickUpdate}><ArrowUpCircle /> Update</button>
        <button type="button" onClick={handleClickDelete}><Trash /> Delete</button>
      </Modal>
    </>
  );
}

TaskCalendar.propTypes = {
  taskEvents: PropTypes.array.isRequired,
};

export default TaskCalendar;
