import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Upload } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreateTask, actionDeleteImportedTaskMessage, actionTaskImported } from '../../../../redux/tasks/tasksActions';
import { getDateByMonthNumber, getMonthName } from '../../../../utils/dateUtils';

import Message from '../../../Form/Message';

import './style.scss';

function Action({ action, sheetId }) {
  const dispatch = useDispatch();

  const { taskImported } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(actionDeleteImportedTaskMessage());
  }, []);

  const handleClick = () => {
    const beginDate = getDateByMonthNumber(action.month_begin);
    const limitDate = getDateByMonthNumber(action.month_limit, beginDate);
    dispatch(actionCreateTask({
      label: action.label,
      begin_date: beginDate,
      limit_date: limitDate,
      sheet_id: sheetId,
    }));
    dispatch(actionTaskImported());
  };

  return (
    <>
      <div className="Action">
        <p className="Action__description">
          <span className="Action__label">{action.label}</span> : {getMonthName(action.month_begin)} à {getMonthName(action.month_limit)}
        </p>
        <button type="button" onClick={handleClick}>
          <Upload width="1em" height="1em" />
          <span> Ajouter</span>
        </button>
      </div>
      {taskImported && <Message message="Tâche importé dans votre calendrier" actionRemove={actionDeleteImportedTaskMessage} />}
    </>
  );
}

Action.propTypes = {
  action: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    month_begin: PropTypes.number,
    month_limit: PropTypes.number,
  }).isRequired,
  sheetId: PropTypes.number.isRequired,
};

export default Action;
