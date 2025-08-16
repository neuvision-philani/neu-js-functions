/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsDateCheck from './date.check.functions';

/** compareTwoDateValues
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Compares two Date objects to determine if they represent the same moment in time. It checks if both arguments are Date objects and then compares their time values using the `getTime()` method.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `date1` {Date}: The first Date object to be compared.
 * * `date2` {Date}: The second Date object to be compared.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to accurately determine if two dates are the same, accounting for the exact time down to the millisecond. This is crucial in contexts where precise time comparison is needed.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where verifying the equivalence of two Date objects is necessary, such as in scheduling applications, event management, or date-related calculations.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if both Date objects represent the same moment in time; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `compareTwoDateValues(new Date('2023-11-28'), new Date('2023-11-28'))` would return `true`, as both dates are the same.
 * * 02: `compareTwoDateValues(new Date('2023-11-28'), new Date('2023-11-29'))` would return `false`, as the dates are different.
 * **************************************** */
function compareTwoDateValues(date_01: Date, date_02: Date) {
  if (!FunctionsDateCheck.isNull(date_01) && !FunctionsDateCheck.isNull(date_02)) {
      return date_01.getTime() === date_02.getTime();
  }

  return false;
}

/** compareIfDateIsNull
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Determines if a provided value is 'null' by checking for the following.
 *
 * * Step 01: It checks if the `value` is 'null'.
 * * Step 02: It checks if the `value` is 'undefined'.
 * * Step 03: It checks if the `value` is a valid date object.
 * * Step 04: It compares the `value` to a provided `nullValue`.
 *
 * If Step 01, 02, 03 or 04 is true, then the value is null and this function returns 'true'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The JSON value to be evaluated.
 * * `nullValue` {any}: Optional. A specific value to compare against to determine if `value` is effectively null. Defaults to null.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide an enhanced check for JSON nullness by considering both traditional nullness and a specific comparison value,
 * ensuring comprehensive validation of JSON data.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where it's critical to ascertain not just the traditional nullness of a JSON value but also its equivalence to a predefined null representation.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the JSON value is null or equivalent to the specified null value; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * `compareIfDateIsNull({key: 'value'}, {key: 'value'})` would return `true` if `{key: 'value'}` is considered as a null value representation.
 * **************************************** */
function compareIfDateIsNull(value: any, nullValue: any = null): boolean {
  try {
    return (
      !FunctionsDateCheck.isNull(nullValue)
        ? FunctionsDateCheck.isNull(value)
        : FunctionsDateCheck.isNull(value) || compareTwoDateValues(value, nullValue)
    );
  } catch (err) { console.log('ERROR FOUND: ', err); return true; }
}

/** EXPORT SECTION
 * **************************************** */
export {
  compareTwoDateValues as twoValues,
  compareIfDateIsNull as ifDateIsNull,
}
