import PropTypes from 'prop-types';
import moment from 'moment';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';

import TaskMapper from './TaskMapper';

function TaskCalendar({ taskEvents, view }) {

  console.dir(view);
  const localizer = momentLocalizer(moment);
  const bigCalEvents = TaskMapper.toBigCalEvents(taskEvents);

  console.dir(taskEvents);
  console.dir(bigCalEvents);

  return (
    <Calendar
      event={bigCalEvents}
      view={view}
      localizer={localizer}
      culture="fr"
      startAccessor="start"
      endAccessor="end"
    />
  );
}

TaskCalendar.propTypes = {
  taskEvents: PropTypes.array.isRequired,
  view: PropTypes.oneOf([Views.AGENDA, Views.MONTH]).isRequired,
};

export default TaskCalendar;
