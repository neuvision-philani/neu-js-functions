/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsNumberCheck from './number.check.functions';

/** configureNullNumber
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Evaluates a provided numeric value for nullness and returns either the original value or a specified fallback number. It uses `FunctionsNumberCheck.valueIsNull` to determine if the value is 'null'.
 * 
 * ? - `Parameters`: 
 * ****************************************
 * * `value` {any}: The numeric value to be evaluated.
 * * `fallbackValue` {number}: Optional. The fallback number to use if `value` is 'null'. Defaults to 0.
 * 
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to ensure that a valid number is always returned, providing a fallback mechanism for potentially 'null' or undefined numeric values.
 * 
 * ? - `Usage`:
 * ****************************************
 * This function is used in situations where a numeric value is critical, and there's a risk of 'null' or undefined inputs, such as in calculations or data processing.
 * 
 * ? - `Returns`:
 * ****************************************
 * Returns the original `value` if it is not 'null'; otherwise, returns the `fallbackValue`.
 * 
 * ? - `Example`:
 * ****************************************
 * * 01: `configureNullNumber(undefined, 10)` would return `10`, as the original value is null.
 * * 02: `configureNullNumber(5, 10)` would return `5`, as the original value is valid.
 * **************************************** */
function configureNullNumber(value: any, fallbackValue: number = 0): number {
  return FunctionsNumberCheck.valueIsNull(value) ? fallbackValue : value;
}

/** configureNumberLength
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Formats a numeric value to a specified length by padding it with a specified character. If the number is shorter than the specified length, the padding character is added to the beginning until it reaches the desired length.
 * 
 * ? - `Parameters`: 
 * ****************************************
 * * `argValue` {number}: The numeric value to be formatted.
 * * `argDigitLength` {number}: Optional. The desired length of the numeric string. Defaults to 0, which means no padding is added.
 * * `characterToPadWith` {string}: Optional. The character to use for padding. Defaults to '0'.
 * 
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to format numeric values into strings of a specific length with a customizable padding character, 
 * useful in standardized displays of numbers, such as serial numbers, IDs, or formatted lists.
 * 
 * ? - `Usage`:
 * ****************************************
 * This function is employed in scenarios where numeric values need a uniform appearance with a specific length and padding character, especially in user interfaces or data reporting.
 * 
 * ? - `Returns`:
 * ****************************************
 * Returns the formatted numeric string with the specified padding character to match the desired digit length.
 * 
 * ? - `Example`:
 * ****************************************
 * * 01: `configureNumberLength(5, 3)` would return '005', padding the number to a length of 3 with zeros.
 * * 02: `configureNumberLength(1234, 6, 'x')` would return 'xx1234', padding the number to a length of 6 with 'x'.
 * **************************************** */
function configureNumberLength(value: number, digitLength: number = 0, characterToPadWith: string = '0') {
  if (FunctionsNumberCheck.valueIsNull(value, -1)) { return value + ''; }

  const methValue = configureNullNumber(value, 0);
  const methDigitLength = configureNullNumber(digitLength, 0);

  return methValue.toString().padStart(methDigitLength, characterToPadWith);
}

/** EXPORT SECTION
 * **************************************** */
export {
  configureNullNumber as fallbackValue,
  configureNumberLength as numberLength,
}
