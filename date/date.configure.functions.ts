/** IMPORTS SECTION
 * **************************************** */
import { valueIsNull as checkIfDateIsNull } from '../date/date.check.functions';
import { monthsList } from '../date/date.get.functions';
import * as FunctionsNumberConfigure from '../number/number.configure.functions';
import * as FunctionsTextConfigure from '../text/text.configure.functions';

/** LOCAL SECTION
 * **************************************** */

/** configureDateFallbackValue
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Processes the given `value` to either return it as is or replace it with a `fallback` Date if the value is considered 'null'.
 * It utilizes `FunctionsCheck.nullValue` to determine the nullness of both `value` and `fallback`.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The value to be checked and potentially replaced.
 * * `fallback` {Date}: Optional. The fallback Date to use if `value` is 'null'. Defaults to 'new Date()'.
 * * `evening` {boolean}: OPTIONAL. Determines whether the time is set to midnight (00:00:00) or just before midnight (23:59:59). { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to ensure that a provided value is not 'null', and to offer a controlled fallback option.
 * It's useful for handling cases where certain values are required and a default must be provided if they are absent.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is commonly used in data processing, rendering UI components, or wherever default values are needed for potentially 'null' inputs.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the original `value` if it is not 'null', otherwise returns the `fallback` value. If `fallback` is 'null', it defaults to an empty Date.
 *
 * ? - `Example`:
 * ****************************************
 * `configureDateFallbackValue(null, 'default text')` would return 'default text'.
 * **************************************** */
function configureDateFallbackValue(value: any, fallbackValue: Date = new Date(), evening: boolean = false): Date {
  return addTimePeriodToDate(checkIfDateIsNull(value) ? fallbackValue : value, evening);
}

/** getPeriodDateForBackend
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Formats a given Date object into a standardized string suitable for backend processing. The function outputs the date and time in an ISO-like format with customizable precision for milliseconds based on the evening parameter.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: The Date object to be formatted.
 * * `evening` {boolean}: OPTIONAL. Determines whether the time is set to end of day (.999Z) or start of day (.000Z). { Default: false}.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a consistent and precise date-time format for backend operations, ensuring that the date and time are correctly interpreted regardless of server or client time zone settings.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is typically used in scenarios where a JavaScript Date object needs to be sent to a backend service or API that requires a specific date-time format, especially when the precision of time is crucial.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a string representing the formatted date and time according to the specified parameters.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getPeriodDateForBackend(new Date('2021-01-01'), false)` would return '2021-01-01T00:00:00.000Z'.
 * * 02: `getPeriodDateForBackend(new Date('2021-01-01'), true)` would return '2021-01-01T00:00:00.999Z', indicating the end of the day.
 * **************************************** */
function getPeriodDateForBackend(date: Date, evening: boolean = false) {
  // const pad = (num: any) => String(num).padStart(2, '0');
  const pad = (num: number) => { return FunctionsNumberConfigure.numberLength(num, 2); };

  const constDay = pad(date.getDate());
  const constMonth = pad(date.getMonth() + 1); // getMonth() is 0-indexed, add 1 for the correct month
  const constYear = date.getFullYear();

  const dateFormatted = `${constYear}-${constMonth}-${constDay}T`;

  const constHours = pad(date.getHours());
  const constMinutes = pad(date.getMinutes());
  const constSeconds = pad(date.getSeconds());

  const constTimeFormatted = `${constHours}:${constMinutes}:${constSeconds}${evening ? '.999Z' : '.000Z'}`;

  return dateFormatted + constTimeFormatted;
}

/** getMonthPeriod
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Adjusts the provided Date object to either the beginning or the end of the month, with an option to set the time to either the beginning or the end of the day. This function clones the input date to avoid mutating the original object and can be used to get a standardized date for specific monthly periods.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: OPTIONAL. The Date object to be adjusted. If not provided, the current date is used. { Default: new Date() }.
 * * `isBeginning` {boolean}: OPTIONAL. Determines whether the date is set to the first day of the month. { Default: false }.
 * * `evening` {boolean}: OPTIONAL. Determines whether the time is set to midnight (00:00:00) or just before midnight (23:59:59). { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a convenient way to get a Date object representing either the start or the end of a month, with time set to a specific point in the day. This is useful in scenarios like generating reports, setting up monthly schedules, or any other use case that requires working with monthly date ranges.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is typically used when there is a need to align dates to the start or end of a month, especially in scheduling, reporting, or when interfacing with APIs that require specific monthly date ranges.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a Date object adjusted to the specified day of the month and time of the day.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getMonthPeriod(new Date('2024-01-18'), true, false)` would return a Date object for '2024-01-01T00:00:00'.
 * * 02: `getMonthPeriod(new Date('2024-01-18'), false, true)` would return a Date object for '2024-01-31T23:59:59'.
 * **************************************** */
function getMonthPeriod(date: Date = new Date(), isBeginning: boolean = false, evening: boolean = false): Date {
  let returnValue = new Date(date.getTime()); // Clone the input date to avoid mutating it

  if (isBeginning) {
    // Set to the first day of the month
    returnValue.setDate(1);
  } else {
    // Set to the last day of the month
    returnValue.setMonth(returnValue.getMonth() + 1, 0);
  }

  // Set time based on the 'evening' flag
  returnValue.setHours(evening ? 23 : 0, evening ? 59 : 0, evening ? 59 : 0);

  return returnValue;
}

/** addTimePeriodToDate
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Adjusts the provided Date object to add a time to either the beginning or the end of the day. This function clones the input date to avoid mutating the original object and can be used to get a standardized date with time added to it.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: The Date object to be adjusted.
 * * `evening` {boolean}: OPTIONAL. Determines whether the time is set to midnight (00:00:00) or just before midnight (23:59:59). { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a convenient way to add time to a Date object representing either the beginning or end of the day.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is typically used when there is a need to add time to a date.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a Date object with the specified time value.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `addTimePeriodToDate(new Date('2024-01-18'), true)` would return a Date object for '2024-01-18T00:00:00'.
 * * 02: `addTimePeriodToDate(new Date('2024-01-18'), false)` would return a Date object for '2024-01-18T23:59:59'.
 * **************************************** */
function addTimePeriodToDate(date: Date, evening: boolean = false): Date {
  let returnValue = new Date(date.getTime()); // Clone the input date to avoid mutating it

  // Set time based on the 'evening' flag
  returnValue.setHours(evening ? 23 : 0, evening ? 59 : 0, evening ? 59 : 0);

  return returnValue;
}

/** setSpecificTimeToDate
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Sets a specific time (hour, minute, and second) on the provided Date object. This function clones the input date to avoid mutating the original object and allows setting a precise time of day.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: The Date object whose time is to be set.
 * * `hour` {number}: OPTIONAL. The hour to be set on the `date` object. { Default: 8 }.
 * * `minute` {number}: OPTIONAL. The minute to be set on the `date` object. { Default: 0 }.
 * * `second` {number}: OPTIONAL. The second to be set on the `date` object. { Default: 0 }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a way to set a specific time of day on a Date object, which is useful for standardizing times or creating specific time points within a day.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is useful in scenarios where a date needs to have a specific time of day set, such as the beginning of a work shift, a specific appointment time, or the start of an event.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a new Date object with the specified time set.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `setSpecificTimeToDate(new Date('2024-01-18'))` would return a Date object for '2024-01-18T08:00:00'.
 * * 02: `setSpecificTimeToDate(new Date('2024-01-18'), 14, 30, 0)` would return a Date object for '2024-01-18T14:30:00'.
 * **************************************** */
function setSpecificTimeToDate(date: Date, hour: number = 8, minute: number = 0, second: number = 0): Date {
  let returnValue = new Date(date.getTime()); // Clone the input date to avoid mutating it

  returnValue.setHours(hour, minute, second);

  return returnValue;
}

/**
 * formatDate
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Formats a given Date object into a string according to the specified format. The function supports various date formats, such as 'YYYY-MM-DD', 'DD MMM YYYY', and defaults to a more readable format if no format is specified or recognized.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: The Date object to be formatted.
 * * `format` {string}: OPTIONAL. The format string specifying how the date should be formatted. Supported formats include 'YYYY-MM-DD' and 'DD MMM YYYY'. { Default: "DD MMM YYYY" }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a flexible and easy way to format Date objects into a string representation that can vary based on the required format. This is useful in scenarios where dates need to be displayed to users or processed in a specific textual format.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is typically used in user interfaces where displaying dates in a specific format is necessary or in data processing where dates need to be formatted as strings for storage or further manipulation.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a string representing the formatted date according to the specified format or the default format if none is provided.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `formatDate(new Date('2024-01-18'), 'YYYY-MM-DD')` would return '2024-Jan-18'.
 * * 02: `formatDate(new Date('2024-01-18'), 'DD MMM YYYY')` would return '18 Jan 2024'.
 * * 02: `formatDate(new Date('2024-01-18'))` would return '18 January 2024 00:00:00' (assuming the default format).
 * **************************************** */
function formatDate(date: Date, format: string = "DD MMMM YYYY HH:MM:SS"): string {
  const configureTextForSearch = (value: string) => { return FunctionsTextConfigure.textForSearch(value); };

  switch (configureTextForSearch(format)) {
    case configureTextForSearch('YYYY-MM-DD'): return (
      date.getFullYear() +
      '-' +
      monthsList(true, 3)[date.getMonth()] +
      '-' +
      FunctionsNumberConfigure.numberLength(date.getDate(), 2)
    );
    case configureTextForSearch('YYYY-MM-DD HH:MM:SS'): return (
      date.getFullYear() +
      '-' +
      monthsList(true, 3)[date.getMonth()] +
      '-' +
      FunctionsNumberConfigure.numberLength(date.getDate(), 2) +
      ' ' +
      FunctionsNumberConfigure.numberLength(date.getHours(), 2) +
      ':' +
      FunctionsNumberConfigure.numberLength(date.getMinutes(), 2) +
      ':' +
      FunctionsNumberConfigure.numberLength(date.getSeconds(), 2)
    );
    case configureTextForSearch('DD MMM YYYY HH:MM:SS'): return (
      FunctionsNumberConfigure.numberLength(date.getDate(), 2) +
      ' ' +
      monthsList(true, 3)[date.getMonth()] +
      ' ' +
      date.getFullYear() +
      ' ' +
      FunctionsNumberConfigure.numberLength(date.getHours(), 2) +
      ':' +
      FunctionsNumberConfigure.numberLength(date.getMinutes(), 2) +
      ':' +
      FunctionsNumberConfigure.numberLength(date.getSeconds(), 2)
    );
    case configureTextForSearch('DD MMM YYYY'): return (
      FunctionsNumberConfigure.numberLength(date.getDate(), 2) +
      ' ' +
      monthsList(true, 3)[date.getMonth()] +
      ' ' +
      date.getFullYear()
    );
    case configureTextForSearch('DD MMMM YYYY'): return (
      FunctionsNumberConfigure.numberLength(date.getDate(), 2) +
      ' ' +
      monthsList(true, 0)[date.getMonth()] +
      ' ' +
      date.getFullYear()
    );
    // case configureTextForSearch('DD MMMM YYYY HH:MM:SS'):
    default: return (
      FunctionsNumberConfigure.numberLength(date.getDate(), 2) +
      ' ' +
      monthsList(true, 0)[date.getMonth()] +
      ' ' +
      date.getFullYear() +
      ' ' +
      FunctionsNumberConfigure.numberLength(date.getHours(), 2) +
      ':' +
      FunctionsNumberConfigure.numberLength(date.getMinutes(), 2) +
      ':' +
      FunctionsNumberConfigure.numberLength(date.getSeconds(), 2)
    );
  }
}

/** EXPORT SECTION
 * **************************************** */
export {
  configureDateFallbackValue as fallbackValue,
  getPeriodDateForBackend as dateForBackend,
  getPeriodDateForBackend as mongoDBDate,
  getMonthPeriod as monthPeriod,
  addTimePeriodToDate as addTimePeriod,
  setSpecificTimeToDate as addSpecificTimeToDate,
  setSpecificTimeToDate as setSpecificTimeToDate,
  formatDate as formatDate,
}
