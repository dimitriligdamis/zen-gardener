/* eslint-disable import/prefer-default-export */
import moment from 'moment';

/**
 * @param {number} monthNumber Zero based number of the month (0-11)
 * @param {string} locale Optional locale code ('fr' or 'en'...)
 * See docs : https://momentjs.com/docs/#/displaying/format/
 */
export const getMonthName = (monthNumber, locale = 'fr') => moment().locale(locale).month(monthNumber).format('MMMM');

/**
 * @param {number} monthNumber One based number of the month (1-12)
 * @param {Date} fromDate Date from which the next month date is calculated
 */
export const getDateByMonthNumber = (monthNumber, fromDate = new Date()) => {
  fromDate.setDate(1);
  if (monthNumber < fromDate.getMonth()) {
    fromDate.setFullYear(fromDate.getFullYear() + 1);
  }
  fromDate.setMonth(monthNumber);
  return fromDate;
};
