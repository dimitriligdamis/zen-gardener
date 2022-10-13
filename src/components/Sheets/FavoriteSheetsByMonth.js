import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getMonthName } from '../../utils/dateUtils';
import { capitalizeFirstLetter } from '../../utils/stringUtils';

function FavoriteSheetsByMonth({ sheetList }) {
  // Extract actions from provided sheets
  // and return action objects like below :
  // { label: 'sheet_name => action_name', month_begin: 3, month_limit: 11, sheetId: 7 }
  let formattedActions = [];
  sheetList.forEach((sheet) => {
    sheet.actions.forEach((action) => formattedActions.push({
      label: `${sheet.title} ➜ ${action.label}`,
      monthBegin: action.month_begin,
      monthLimit: action.month_limit,
      sheetId: sheet.id,
    }));
  });

  // Sort actions by date ascending
  formattedActions = formattedActions.sort(
    (actionA, actionB) => actionA.being_date - actionB.being_date,
  );

  // JSX elements generated by the for loop
  const outputJsx = [];

  // Zero based current month (used by modulo operator %)
  const zbCurrentMonth = new Date().getMonth() - 1;

  // Loop through the 12 next months
  for (let m = 0; m < 12; m += 1) {
    const month = ((zbCurrentMonth + m) % 12) + 1;
    const monthName = capitalizeFirstLetter(getMonthName(month));

    const monthActionsJsx = formattedActions
      .filter((action) => action.monthBegin === month)
      .map((action) => (
        <p key={`action-${action.sheetId}-${action.label}`}><Link to={`/fiches/${action.sheetId}`}>{action.label}</Link></p>
      ));

    if (monthActionsJsx.length > 0) {
      outputJsx.push(<h2 key={`month-${monthName}`}>{monthName}</h2>);
      outputJsx.push(monthActionsJsx);
    }
  }

  return outputJsx;
}

FavoriteSheetsByMonth.propTypes = {
  sheetList: PropTypes.array.isRequired,
};

export default FavoriteSheetsByMonth;
