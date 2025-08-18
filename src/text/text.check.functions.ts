/** checkIfTextIsNull
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Determines if a provided value is 'null' by checking for the following.
 *
 * * Step 01: It checks if the `value` is 'null'.
 * * Step 02: It checks if the `value` is 'undefined'.
 * * Step 03: It checks if the `value` is a valid string.
 * * Step 04: It checks if the `value` is a equal to the `nullValue` provided.
 *
 * If step 01, 02, 03 or 04 is true, then the value is null and this function returns 'true'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The value to be checked, typically expected to be a string.
 * * `nullValue` {string}: Optional. A specific string that represents a null value for string. Defaults to an empty string.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a comprehensive check for determining if a string value is effectively 'null' or empty,
 * which is essential for validating string data in various contexts.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when validating string inputs,
 * particularly when different conditions might be considered equivalent to a null or empty string.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the string value is considered 'null' or empty; `false` otherwise.
 *
 * ? - `Examples`:
 * ****************************************
 * * `checkIfTextIsNull('no-data', 'no-data')` would return `true`, indicating that the input string is equivalent to a null value.
 * **************************************** */
function checkIfTextIsNull(value: any, nullValue: string = ''): boolean {
  try {
    return value === null || value === undefined || !checkIfValidString(value) || value === '' || value === nullValue;
  } catch (err) { console.log('ERROR FOUND: ', err); return true; }
}

/** checkIfValidString
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Determines if the provided value is a valid string.
 * Perform a case-insensitive comparison of the value's type against the string 'string'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The value to be evaluated for being a string type.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to ensure that a given value is a string,
 * which is crucial for string-specific operations and data validations in various application contexts.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios requiring confirmation of a value's data type as a string,
 * such as in input validations, text processing, or data formatting.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the value is of string type; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `checkIfValidString('hello')` would return `true`, confirming that 'hello' is a string.
 * * 02: `checkIfValidString(123)` would return `false`, as the input is not a string.
 * **************************************** */
function checkIfValidString(value: any): boolean {
  return typeof value === 'string';
}

/** EXPORT SECTION
 * **************************************** */
export {
  checkIfTextIsNull as valueIsNull,
  checkIfValidString as isValid,
}
