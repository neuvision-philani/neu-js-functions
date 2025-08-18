/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsAnyCompare from '../any/any.compare.functions';
import * as FunctionsArrayCompare from '../array/array.compare.functions';
import * as FunctionsBooleanCompare from '../boolean/boolean.compare.functions';
import * as FunctionsDateCompare from '../date/date.compare.functions';
import * as FunctionsJSONCompare from '../json/json.compare.functions';
import * as FunctionsNumberCompare from '../number/number.compare.functions';
import * as FunctionsTextCompare from '../text/text.compare.functions';
import * as FunctionsTextConfigure from '../text/text.configure.functions';

/** compareTwoValues
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Compares two values deeply to determine if they are equal.
 * It handles primitive data types (such as strings, numbers, and booleans), objects, and arrays.
 * If the values are objects or arrays, the function compares their properties and elements recursively.
 * This function is designed to perform a deep comparison between any two values,
 * even if they are nested or contain complex structures.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value_01` {any}: The 1st value to be compared.
 * * `value_02` {any}: The 2nd value to be compared.
 * * `dataType` {string}: The dataType value that determines the comparison.
 * * `normalize` {boolean}: Optional {Default: true}. A flag that indicates whether the comparison should normalize the values (for example, ignoring case in strings) before comparing.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a universal and accurate way to compare values in JavaScript, considering that simple equality checks might not be sufficient for a true comparison, especially for objects and arrays.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is useful in scenarios where a deep-level comparison of values is required, such as in state comparisons in UI frameworks, data validation, ensuring data integrity, or during testing where the structure and content of various data types need to be compared.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if both values are deeply equal; `false` otherwise.
 *
 * ? - `Examples`:
 * ****************************************
 * * String: `compareTwoValues('test', 'test', 'string', false)` would return `true`, as both strings are identical.
 * * String Normalized: `compareTwoValues('test', 'tEst', 'string', true)` would return `true`, as it normalizes the case before comparing.
 * * Number: `compareTwoValues(10, 10, 'number')` would return `true`, as both numbers are the same.
 * * Boolean: `compareTwoValues(true, false, 'boolean')` would return `false`, as the boolean values are different.
 * * Array: `compareTwoValues([1, 2, 3], [1, 2, 3], 'array')` would return `true`, as both arrays contain the same elements in the same order.
 * * JSON Array: `compareTwoValues([{ key: 'value' }], [{ key: 'value' }], 'json')` would return `true`, as both JSON arrays contain the same objects with the same structure and values.
 * **************************************** */
function compareTwoValues(value_01: any, value_02: any, dataType: string = 'string', normalise: boolean = true): boolean {
  try {
    const methDataType = FunctionsTextConfigure.textForSearch(dataType);

    switch (methDataType) {
      case 'array':
        return FunctionsArrayCompare.twoValues(value_01, value_02);
      case 'boolean':
        return FunctionsBooleanCompare.twoValues(value_01, value_02);
      case 'date':
        return FunctionsDateCompare.twoValues(value_01, value_02);
      case 'json':
        return FunctionsJSONCompare.twoValues(value_01, value_02);
      case 'number':
        return FunctionsNumberCompare.twoValues(value_01, value_02);
      case 'string':
      case 'text':
        return FunctionsTextCompare.twoValues(value_01, value_02, normalise);
      default:
        return FunctionsAnyCompare.twoValues(value_01, value_02);
    }
  } catch (err) { console.log('ERROR ENCOUNTERED - compareTwoValues!', err); return false; }
}

/** EXPORT SECTION
 * **************************************** */
export {
  compareTwoValues as twoValues,
}
