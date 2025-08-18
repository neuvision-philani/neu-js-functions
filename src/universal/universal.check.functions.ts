/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsAnyCheck from '../any/any.check.functions';
import * as FunctionsArrayCheck from '../array/array.check.functions';
import * as FunctionsBooleanCheck from '../boolean/boolean.check.functions';
import * as FunctionsDateCheck from '../date/date.check.functions';
import * as FunctionsJSONCheck from '../json/json.check.functions';
import * as FunctionsNumberCheck from '../number/number.check.functions';
import * as FunctionsTextCheck from '../text/text.check.functions';
import * as FunctionsTextConfigure from '../text/text.configure.functions';

/** checkIfValueIsNull
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Determines if a provided value is 'null' by considering if it is actually 'null',
 * based on the `dataType` provided and then if the `value` is equal to a specified
 * `minOrNullValue` that indicates either a 'minimum' or 'null value',
 * which is determined by the `dataType` provided.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The value to be checked.
 * * `dataType` {string}: The data type for the `value` to be checked.
 * * `minOrNullValue` {any}: Optional. A specific value that is used to represent a 'minimum' or 'null value'. Defaults to null.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to determine if a value is effectively 'null' based on specific criteria,
 * which is useful in scenarios requiring validation of string content or handling empty strings.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in data validation,
 * particularly in scenarios where empty variables or specific value patterns are considered equivalent to null.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the string is 'null' as per the defined criteria; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `checkIfValueIsNull('', 'string', 'no-data')` would return `true` since the empty string is considered a null value.
 * * 02: `checkIfValueIsNull(14, 'number', 15)` would return `true` since the number value 14 may not be null, but it is less then 15.
 * * 03: `checkIfValueIsNull({}, 'json')` would return `true` since the value {} may be a json object, but it has no keys within it.
 * **************************************** */
function checkIfValueIsNull(value: any, dataType: string = "", minOrNullValue: any = null): boolean {
  dataType = FunctionsTextConfigure.textForSearch(dataType);

  switch (dataType) {
    case "array":
      return FunctionsArrayCheck.valueIsNull(value);
    case "boolean":
    case "flag":
    case "switch":
      return FunctionsBooleanCheck.valueIsNull(value);
    case "date":
      return FunctionsDateCheck.valueIsNull(value);
    case "json":
    case "object":
    case "json-object":
      return FunctionsJSONCheck.valueIsNull(value);
    case "number":
    case "digit":
      return FunctionsNumberCheck.valueIsNull(value, minOrNullValue);
    case "string":
    case "text":
      return FunctionsTextCheck.valueIsNull(value, minOrNullValue);
    default:
      return FunctionsAnyCheck.valueIsNull(value);
  }
}

/** EXPORT SECTION
 * **************************************** */
export {
  checkIfValueIsNull as valueIsNull,
}
