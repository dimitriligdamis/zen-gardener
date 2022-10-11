import PropTypes from 'prop-types';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Moment is used react-big-calendar for date formatting and stuff
import moment from 'moment';
// DO NOT REMOVE moment locale, it is used by react-big-calendar
// to format dates according to user localization
// and sets 'monday' first of week
import 'moment/locale/fr';

import TaskMapper from './TaskMapper';

function TaskCalendar({ taskEvents }) {
  const localizer = momentLocalizer(moment);
  const bigCalEvents = TaskMapper.toBigCalEvents(taskEvents);

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

  return (
    <Calendar
      events={bigCalEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.AGENDA, Views.MONTH]}
      localizer={localizer}
      defaultView={Views.AGENDA}
      defaultDate={moment().toDate()}
      messages={messages}
      hideTimeIndicator
      popup
    />
  );
}

TaskCalendar.propTypes = {
  taskEvents: PropTypes.array.isRequired,
};

export default TaskCalendar;
