/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsNumberConfigure from '../number/number.configure.functions';

/** LOCAL SECTION
 * **************************************** */

/** getBeginningOfTheYear
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Returns a Date object set to the beginning of the year for the provided date. The exact time of the beginning is determined by the 'evening' flag.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: OPTIONAL. The Date object representing the year for which the beginning is required. If not provided, the current date's year is used. { Default: new Date() }.
 * * `evening` {boolean}: OPTIONAL. Determines whether the time is set to midnight (00:00:00) if false, or just before midnight (23:59:59) if true. { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide an easy way to get the starting point of any given year, useful in scheduling and reporting.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where the exact start date of a year is needed, with control over the precise time of day based on the 'evening' flag.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a Date object set to the beginning of the specified year.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getBeginningOfTheYear(new Date('2024-09-18'), false)` would return a Date object for '2024-01-01T00:00:00'.
 * * 02: `getBeginningOfTheYear(new Date('2024-07-18'), true)` would return a Date object for '2024-01-01T23:59:59'.
 * **************************************** */
function getBeginningOfTheYear(date: Date = new Date(), evening: boolean = false): Date {
  let returnValue = new Date(date.getTime()); // Clone the input date to avoid mutating it

  returnValue.setDate(1);
  returnValue.setMonth(0);
  returnValue.setHours(evening ? 23 : 0, evening ? 59 : 0, evening ? 59 : 0);

  return returnValue;
}

/** getBeginningOfMonth
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Returns a Date object set to the beginning of the month for the provided date. The exact time of the beginning is determined by the 'evening' flag.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: OPTIONAL. The Date object representing the month for which the beginning is required. If not provided, the current date's month is used. { Default: new Date() }.
 * * `evening` {boolean}: OPTIONAL. Determines whether the time is set to midnight (00:00:00) if false, or just before midnight (23:59:59) if true. { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide an easy way to get the starting point of any given month, useful in scheduling and reporting.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where the exact start date of a month is needed, with control over the precise time of day based on the 'evening' flag.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a Date object set to the beginning of the specified month.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getBeginningOfMonth(new Date('2024-01-18'), false)` would return a Date object for '2024-01-01T00:00:00'.
 * * 02: `getBeginningOfMonth(new Date('2024-01-18'), true)` would return a Date object for '2024-01-01T23:59:59'.
 * **************************************** */
function getBeginningOfMonth(date: Date = new Date(), evening: boolean = false): Date {
  let returnValue = new Date(date.getTime()); // Clone the input date to avoid mutating it

  returnValue.setDate(1);
  returnValue.setHours(evening ? 23 : 0, evening ? 59 : 0, evening ? 59 : 0);

  return returnValue;
}

/** getEndOfTheYear
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Returns a Date object set to the end of the month for the provided date. The exact time of the end is determined by the 'evening' flag.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: OPTIONAL. The Date object representing the month for which the end is required. If not provided, the current date's month is used. { Default: new Date() }.
 * * `evening` {boolean}: OPTIONAL. Determines whether the time is set to just before midnight (23:59:59) if false, or midnight (00:00:00) if true. { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a straightforward way to get the end point of any given month, which is valuable in date range calculations and month-end processing.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when a precise end date of a month is needed, with the ability to specify the exact time of day using the 'evening' flag.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a Date object set to the end of the specified month.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getEndOfTheYear(new Date('2024-07-18'), false)` would return a Date object for '2024-12-31T23:59:59'.
 * * 02: `getEndOfTheYear(new Date('2024-09-27'), true)` would return a Date object for '2024-12-31T00:00:00'.
 * **************************************** */
function getEndOfTheYear(date: Date = new Date(), evening: boolean = false): Date {
  let returnValue = new Date(date.getTime()); // Clone the input date to avoid mutating it
  returnValue.setMonth(12, 0);
  returnValue.setHours(evening ? 23 : 0, evening ? 59 : 0, evening ? 59 : 0);

  return returnValue;
}

/** getEndOfMonth
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Returns a Date object set to the end of the month for the provided date. The exact time of the end is determined by the 'evening' flag.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: OPTIONAL. The Date object representing the month for which the end is required. If not provided, the current date's month is used. { Default: new Date() }.
 * * `evening` {boolean}: OPTIONAL. Determines whether the time is set to just before midnight (23:59:59) if false, or midnight (00:00:00) if true. { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a straightforward way to get the end point of any given month, which is valuable in date range calculations and month-end processing.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when a precise end date of a month is needed, with the ability to specify the exact time of day using the 'evening' flag.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a Date object set to the end of the specified month.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getEndOfMonth(new Date('2024-01-18'), false)` would return a Date object for '2024-01-31T23:59:59'.
 * * 02: `getEndOfMonth(new Date('2024-01-18'), true)` would return a Date object for '2024-01-31T00:00:00'.
 * **************************************** */
function getEndOfMonth(date: Date = new Date(), evening: boolean = false): Date {
  let returnValue = new Date(date.getTime()); // Clone the input date to avoid mutating it
  returnValue.setMonth(returnValue.getMonth() + 1, 0);
  returnValue.setHours(evening ? 23 : 0, evening ? 59 : 0, evening ? 59 : 0);

  return returnValue;
}

/** findDaysToPreviousMonday
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Calculates the number of days from a given date to the next Monday. The function takes into account JavaScript's `Date.getDay()` convention, where the week starts on Sunday (0) and ends on Saturday (6). It can return the result as a positive or negative number based on the `makeNegativeFlag` parameter.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: OPTIONAL. The Date object from which to calculate the days to the next Monday. If not provided, the current date is used. { Default: new Date() }.
 * * `makeNegativeFlag` {boolean}: OPTIONAL. Determines whether the returned number should be positive (false) or negative (true). { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to facilitate finding the number of days until the next Monday for scheduling, weekly planning, or similar scenarios. The ability to return the number as negative or positive allows for greater flexibility in different use cases.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is useful in scenarios that require calculating the time until the next occurrence of a specific weekday, such as Monday. It is ideal for applications in event planning, scheduling recurring tasks, or managing weekly cycles.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns an integer representing the number of days from the given date to the next Monday, either as a positive or negative number based on `makeNegativeFlag`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `findDaysToPreviousMonday(new Date('2024-01-18'))` would return 3, as the Monday from 18 January 2024 `Thursday`, is three days behind.
 * * 02: `findDaysToPreviousMonday(new Date('2024-01-15'))` would return 0, as it is already Monday.
 * * 03: `findDaysToPreviousMonday(new Date('2024-01-18'), true)` would return -3, as the Monday from 18 January 2024 `Thursday`, is three days ahead and `makeNegativeFlag` is true.
 * **************************************** */
function findDaysToPreviousMonday(date: Date = new Date(), makeNegativeFlag: boolean = false): number {
  const dayOfWeek = date.getDay();
  const makeNegativeNumber = (value: number) => { return value * (makeNegativeFlag ? -1 : 1) };

  switch(dayOfWeek) {
    case 0: return makeNegativeNumber(6);
    case 1: return makeNegativeNumber(0);
    case 2: return makeNegativeNumber(1);
    case 3: return makeNegativeNumber(2);
    case 4: return makeNegativeNumber(3);
    case 5: return makeNegativeNumber(4);
    case 6: return makeNegativeNumber(5);
    default: return makeNegativeNumber(0);
  }
}

/** findDaysToNextMonday
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Calculates the number of days from a given date to the next Monday. The function takes into account JavaScript's `Date.getDay()` convention, where the week starts on Sunday (0) and ends on Saturday (6). It can return the result as a positive or negative number based on the `makeNegativeFlag` parameter.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: OPTIONAL. The Date object from which to calculate the days to the next Monday. If not provided, the current date is used. { Default: new Date() }.
 * * `makeNegativeFlag` {boolean}: OPTIONAL. Determines whether the returned number should be positive (false) or negative (true). { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to facilitate finding the number of days until the next Monday for scheduling, weekly planning, or similar scenarios. The ability to return the number as negative or positive allows for greater flexibility in different use cases.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is useful in scenarios that require calculating the time until the next occurrence of a specific weekday, such as Monday. It is ideal for applications in event planning, scheduling recurring tasks, or managing weekly cycles.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns an integer representing the number of days from the given date to the next Monday, either as a positive or negative number based on `makeNegativeFlag`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `findDaysToNextMonday(new Date('2024-01-18'))` would return 3, as the Monday from 18 January 2024 `Thursday`, is three days behind.
 * * 02: `findDaysToNextMonday(new Date('2024-01-15'))` would return 0, as it is already Monday.
 * * 03: `findDaysToNextMonday(new Date('2024-01-18'), true)` would return -3, as the Monday from 18 January 2024 `Thursday`, is three days ahead and `makeNegativeFlag` is true.
 * **************************************** */
function findDaysToNextMonday(date: Date = new Date(), makeNegativeFlag: boolean = false): number {
  const dayOfWeek = date.getDay();
  const makeNegativeNumber = (value: number) => { return value * (makeNegativeFlag ? -1 : 1) };

  switch(dayOfWeek) {
    case 0: return makeNegativeNumber(8);
    case 1: return makeNegativeNumber(7);
    case 2: return makeNegativeNumber(6);
    case 3: return makeNegativeNumber(5);
    case 4: return makeNegativeNumber(4);
    case 5: return makeNegativeNumber(3);
    case 6: return makeNegativeNumber(2);
    default: return makeNegativeNumber(0);
  }
}

/** getDateArrayYears
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Generates an array of years from a specified starting year to the current year. This function is useful for creating lists of years dynamically based on the current date.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `oldestYear` {number}: OPTIONAL. The starting year for the array. { Default: 2018 }.
 * * `latestYear` {number}: OPTIONAL. The ending year for the array. { Default: The year that today falls in. }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a simple and efficient way to generate an array of consecutive years, which can be used in scenarios such as populating dropdown menus, generating reports, or for any use case where a range of years is needed.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is typically used in user interface components where a selection of years is required. It can also be used in data processing to generate a range of years for analysis or reporting.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns an array of numbers, each representing a year from the `oldest year` to the `specified current year`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getDateArrayYears(2010)` would return an array of years from 2010 up to the year today falls within.
 * * 01: `getDateArrayYears(2010, 2018)` would return an array of years from 2010 up to 2018.
 * * 02: `getDateArrayYears()` with no parameters would return an array of years from 2018 up to the year today falls within, assuming the default value is 2018.
 * **************************************** */
function getDateArrayYears(oldestYear: number = 2018, latestYear: number = (new Date()).getFullYear()): number[] {
  return Array.from({ length: latestYear - oldestYear + 1 }, (_, i) => oldestYear + i);
}

/**
 * getDateArrayMonths
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Generates an array of months, either as numeric values (1-12) or as their string names ("January"-"December"), based on the specified parameters. Optionally, it can truncate the month names or pad the month numbers based on the `monthLength` parameter.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `getMonthsAsString` {boolean}: OPTIONAL. Determines if the months are returned as names (true) or numbers (false). { Default: true }.
 * * `monthLength` {number}: OPTIONAL. Determines the length to which month names should be truncated or month numbers should be padded. If 0, no truncation or padding is applied. { Default: 0 }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a flexible way to generate an array of months in different formats, suitable for various user interface needs like dropdown menus, date filters, or data presentations.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is useful in user interfaces and data processing where a list of months is needed in a specific format, with optional length specifications for aesthetic or consistency reasons.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns an array of strings or numbers, representing months either as names or numeric values, optionally truncated or padded based on `monthLength`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getDateArrayMonths(true, 3)` would return an array of abbreviated month names, like ["Jan", "Feb", "Mar", ...].
 * * 02: `getDateArrayMonths(false, 2)` would return an array of padded month numbers, like ["01", "02", "03", ...].
 * **************************************** */
function getDateArrayMonths(getMonthsAsString: boolean = true, monthLength: number = 0): (string | number)[] {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if (getMonthsAsString) {
    return monthNames.map(monthName => monthLength > 0 ? monthName.substring(0, monthLength) : monthName);
  } else {
    return Array.from({ length: 12 }, (_, i) => monthLength > 0 ? String(i + 1).padStart(monthLength, '0') : i + 1);
  }
}

/** getDateBasedOnDays
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Calculates a new date based on a specified number of days added to or subtracted from a given date. Optionally sets the time to the beginning or end of the calculated day based on the `evening` flag.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: The base Date object from which the calculation is made.
 * * `days` {number}: OPTIONAL. The number of days to add (or subtract if negative) to the `date`. { Default: 0 }.
 * * `evening` {boolean}: OPTIONAL. Determines the time of the returned date. If true, sets the time to 23:59:59 (end of the day). If false, sets the time to 00:00:00 (start of the day). { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to facilitate date manipulation by adding or subtracting a specific number of days to a given date and setting the time to a specified point in the day, useful for scheduling, reminders, or date-based calculations.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is ideal for applications requiring date arithmetic, such as calculating deadlines, scheduling events, or performing date-based logic in software applications.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a new Date object representing the date after adding/subtracting the specified number of days, with time set based on the `evening` parameter.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getDateBasedOnDays(new Date('2024-01-18'), 5, false)` would return a Date object for '2024-01-23T00:00:00'.
 * * 02: `getDateBasedOnDays(new Date('2024-01-18'), -3, true)` would return a Date object for '2024-01-15T23:59:59'.
 * **************************************** */
function getDateBasedOnDays(date: Date, days: number = 0, evening: boolean = false): Date {
  const nextDay = new Date(date.getTime());
  nextDay.setDate(nextDay.getDate() + days);
  nextDay.setHours(evening ? 23 : 0, evening ? 59 : 0, evening ? 59 : 0);

  return nextDay;
}

/** getPreviousDay
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Calculates the date for the day before the provided date and optionally sets the time to the beginning or end of that day. The function creates a new Date object to avoid mutating the original date provided.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: The Date object for which the previous day is to be calculated.
 * * `evening` {boolean}: OPTIONAL. Determines the time of the returned date. If true, sets the time to 23:59:59 (end of the day). If false, sets the time to 00:00:00 (start of the day). { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide an easy way to find the date of the previous day from a given date, with an option to specify the exact time, useful in scenarios like calculating deadlines or scheduling events.
 *
 * ? - `Usage`:
 * ****************************************
 * This function can be used in scenarios where the date of the day before a specific date is needed, such as calculating expiration dates, scheduling reminders, or handling date-based queries.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a new Date object representing the day before the given date, with the time set based on the `evening` parameter.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getPreviousDay(new Date('2024-01-18'), false)` would return a Date object for '2024-01-17T00:00:00'.
 * * 02: `getPreviousDay(new Date('2024-01-18'), true)` would return a Date object for '2024-01-17T23:59:59'.
 * **************************************** */
function getPreviousDay(date: Date, evening: boolean = false): Date {
  return getDateBasedOnDays(date, -1, evening);
}

/** getNextDay
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Calculates the date for the day after the provided date and optionally sets the time to the beginning or end of that day. The function creates a new Date object to avoid mutating the original date provided.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date` {Date}: The Date object for which the next day is to be calculated.
 * * `evening` {boolean}: OPTIONAL. Determines the time of the returned date. If true, sets the time to 23:59:59 (end of the day). If false, sets the time to 00:00:00 (start of the day). { Default: false }.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide an easy way to find the date of the next day from a given date, with an option to specify the exact time, useful in scenarios like planning events or handling date-based operations.
 *
 * ? - `Usage`:
 * ****************************************
 * This function can be used in various scenarios where the date of the day after a specific date is needed, such as for scheduling, reminders, or date-based logic in applications.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a new Date object representing the day after the given date, with the time set based on the `evening` parameter.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getNextDay(new Date('2024-01-18'), false)` would return a Date object for '2024-01-19T00:00:00'.
 * * 02: `getNextDay(new Date('2024-01-18'), true)` would return a Date object for '2024-01-19T23:59:59'.
 * **************************************** */
function getNextDay(date: Date, evening: boolean = false): Date {
  return getDateBasedOnDays(date, 1, evening);
}


/** EXPORT SECTION
 * **************************************** */
export {
  getBeginningOfTheYear as beginningOfTheYear,
  getBeginningOfTheYear as firstDayOfTheYear,
  getBeginningOfMonth as beginningOfTheMonth,
  getBeginningOfMonth as firstDayOfTheMonth,
  getEndOfMonth as endOfTheMonth,
  getEndOfMonth as lastDayOfTheMonth,
  getEndOfTheYear as endOfTheYear,
  getEndOfTheYear as lastDayOfTheYear,
  findDaysToPreviousMonday as findDaysToPreviousMonday,
  findDaysToNextMonday as findDaysToNextMonday,
  getDateArrayYears as dateArrayYears,
  getDateArrayYears as years,
  getDateArrayYears as yearsList,
  getDateArrayMonths as dateArrayMonths,
  getDateArrayMonths as months,
  getDateArrayMonths as monthsList,
  getDateBasedOnDays as dateBasedOnDays,
  getDateBasedOnDays as basedOnDays,
  getPreviousDay as previousDay,
  getPreviousDay as yesterday,
  getNextDay as nextDay,
  getNextDay as tomorrow,
}
