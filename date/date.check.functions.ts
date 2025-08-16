/** checkIfDateIsNull
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Determines if a provided value is 'null' by checking for the following.
 *
 * * Step 01: It checks if the `value` is 'null'.
 * * Step 02: It checks if the `value` is 'undefined'.
 * * Step 03: It checks if the `value` is a valid date.
 *
 * If With Step 01, 02 or 03 is true, then the value is null and this function returns 'true'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The value to be evaluated, expected to be a date.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to verify whether a value is a valid date or effectively 'null',
 * which is important for date-related operations and validations in applications.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios requiring confirmation of the validity of a date, such as in date manipulations, scheduling applications, or input validations.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the value is not a valid date; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `checkIfDateIsNull(new Date('invalid-date-string'))` would return `true`, indicating that the input is not a valid date.
 * **************************************** */
function checkIfDateIsNull(value: any): boolean {
  try {
    return value === null || value === undefined || !checkIfValidDate(value);
  } catch (err) { console.log('ERROR FOUND: ', err); return true; }
}

/** checkIfValidDate
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Determines if a provided value is a valid date. It checks if the value is an instance of the Date object and that its time value is not NaN.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The value to be evaluated, expected to be a Date object or convertible to a Date.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to verify whether a given value is a legitimate and valid date,
 * which is crucial for operations involving date calculations, comparisons, or formatting.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where confirming the validity of a date is necessary, such as in date manipulations, scheduling applications, or input validations.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the value is a valid date; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `checkIfValidDate(new Date('2023-03-15'))` would return `true`, indicating that the input is a valid date.
 * * 02: `checkIfValidDate('2023-03-15')` would return `false`, indicating that the input is NOT a valid date.
 * **************************************** */
function checkIfValidDate(value: any): boolean {
  try {
    return value instanceof Date && !isNaN(value.getTime());
  } catch (err) { return false; }
}

/** EXPORT SECTION
 * **************************************** */
export {
  checkIfDateIsNull as valueIsNull,
  checkIfValidDate as isValid,
}
