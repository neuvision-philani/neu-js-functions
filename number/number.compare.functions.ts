/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsNumberCheck from './number.check.functions';

/** compareTwoNumbers
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Compares two numeric values for equality. The function first checks if both numbers are valid (i.e., not 'null' as defined by `FunctionsNumberCheck.isNull`) and then compares them for equality.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `number_01` {any}: The first number to be compared.
 * * `number_02` {any}: The second number to be compared.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a reliable comparison of two numeric values, ensuring both are valid numbers before performing the comparison, which is crucial in numerical data validation and processing.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where it's essential to compare two numeric values, such as in calculations, data analysis, or conditional logic checks.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if both numbers are valid and equal; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `compareTwoNumbers(10, 10)` would return `true`, as both numbers are equal.
 * * 02: `compareTwoNumbers(10, '10')` would return `false`, as the second value is not a valid number.
 * **************************************** */
function compareTwoNumbers(number_01: any, number_02: any): boolean {
  try {
    if (!FunctionsNumberCheck.isNull(number_01) && !FunctionsNumberCheck.isNull(number_02)) {
      return number_01 === number_02;
    }

    return false;
  } catch(err) { console.log('ERROR ENCOUNTERED - compareTwoNumbers!', err); return false; }
}

/** EXPORT SECTION
 * **************************************** */
export {
  compareTwoNumbers as twoValues,
}
