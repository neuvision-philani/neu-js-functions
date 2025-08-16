/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsTextCompare from '../text/text.compare.functions';

/** checkIfNumberIsNull
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Determines if a provided value is 'null' by checking for the following.
 *
 * * Step 01: It checks if the `value` is 'null'.
 * * Step 02: It checks if the `value` is 'undefined'.
 * * Step 03: It checks if the `value` is a valid number.
 * * Step 04: It checks if the `value` is less than or equal to a specified minimum value.
 *
 * If step 01, 02, 03 or 04 is true, then the value is null and this function returns 'true'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The numeric value to be checked.
 * * `minValue` {number}: Optional. A minimum value to compare against. If provided, the function also checks if `value` is less than or equal to this minimum value.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to assess whether a numeric input is effectively 'null', invalid, or too small based on given criteria,
 * which is essential for validating numerical data in applications.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when it's necessary to validate numeric inputs, especially in contexts where certain numeric ranges or values are required.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the numeric value is considered 'null' or invalid as per the defined criteria; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * `checkIfNumberIsNull(0, 5)` would return `true`, as 0 is less than the minimum value of 5.
 * **************************************** */
function checkIfNumberIsNull(value: any, minValue?: number): boolean {
  try {
    let returnValue: boolean = value === null || value === undefined || !checkIfValidNumber(value);

    if (minValue !== null && minValue !== undefined) {
      returnValue = returnValue || value <= minValue;
    }

    return returnValue;
  } catch (err) { console.log('ERROR FOUND: ', err); return true; }
}

/** checkIfValidNumber
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Checks if the provided value is a valid number. It verifies that the value is of the number type and is not NaN (Not a Number).
 *
 * ? - `Parameters`:
 * ****************************************
 * @param {any} `value` {any}: The value to be checked for being a valid number.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to ensure that a given value is a valid number, which is critical for numerical calculations and data processing.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used whenever there is a need to validate whether an input or a value is a number, such as in form validations, mathematical calculations, or data processing.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the value is a valid number, `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * `checkIfValidNumber(123)` would return `true`, while `checkIfValidNumber('abc')` would return `false`.
 * **************************************** */
function checkIfValidNumber(value: any): boolean {
  return FunctionsTextCompare.twoValues(typeof value, 'number', true) && !isNaN(value);
}

/** EXPORT SECTION
 * **************************************** */
export {
  checkIfNumberIsNull as valueIsNull,
  checkIfValidNumber as isValidNumber,
}
