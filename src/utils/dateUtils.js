/* eslint-disable import/prefer-default-export */
import moment from 'moment';

/**
 * @param {number} monthNumber Zero based number of the month (0-11)
 * @param {string} locale Optional locale code ('fr' or 'en'...)
 * See docs : https://momentjs.com/docs/#/displaying/format/
 */
export const getMonthName = (monthNumber, locale = 'fr') => moment().locale(locale).month(monthNumber).format('MMMM');
