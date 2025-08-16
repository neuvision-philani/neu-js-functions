/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsTextCompare from '../text/text.compare.functions';

/** checkIfBooleanIsNull
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Determines if a provided value is 'null' by checking for the following.
 *
 * * Step 01: It checks if the `value` is 'null'.
 * * Step 02: It checks if the `value` is 'undefined'.
 * * Step 03: It checks if the `value` is a valid boolean value.
 *
 * If With Step 01, 02 or 03 is true, then the value is null and this function returns 'true'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The value to be evaluated, expected to be a boolean.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to verify whether a value is a valid boolean or effectively 'null', which is crucial for logical operations and boolean data validation.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where it's necessary to confirm that a value is a legitimate boolean, such as in conditional checks or boolean data processing.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the value is not a valid boolean; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * `checkIfBooleanIsNull('not a boolean')` would return `true`, indicating that the input is not a valid boolean value.
 * **************************************** */
function checkIfBooleanIsNull(value: any): boolean {
  try {
    return value === null || value === undefined || !checkIfValidBooleanFlag(value);
  } catch (err) { console.log('ERROR FOUND: ', err); return true; }
}

/** checkIfValidBooleanFlag
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Checks if the provided value is a valid boolean. It verifies that the value is of the boolean type.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The value to be checked for being a valid boolean.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to ensure that a given value is a valid boolean,
 * which is critical for boolean calculations and data processing.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used whenever there is a need to validate whether an input or a value is a boolean,
 * such as in form validations, mathematical calculations, or data processing.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the value is a valid boolean, `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `checkIfValidBooleanFlag(true)` would return `true`.
 * * 02: `checkIfValidBooleanFlag(false)` would return `true`.
 * * 03: `checkIfValidBooleanFlag(0)` would return `false`.
 * * 04: `checkIfValidBooleanFlag(1)` would return `false`.
 * * 05: `checkIfValidBooleanFlag(null)` would return `false`.
 * * 06: `checkIfValidBooleanFlag('true')` would return `false`.
 * * 07: `checkIfValidBooleanFlag('false')` would return `false`.
 * **************************************** */
function checkIfValidBooleanFlag(value: any): boolean {
  return FunctionsTextCompare.twoValues(typeof value, 'boolean', true);
}

/** EXPORT SECTION
 * **************************************** */
export {
  checkIfBooleanIsNull as isNull,
  checkIfBooleanIsNull as valueIsNull,
  checkIfValidBooleanFlag as isValid,
}
