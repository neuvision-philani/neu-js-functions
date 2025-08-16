// IMPORT: FUNCTIONS > TEXT
import * as FunctionsTextCheck from '../text/text.check.functions';
import * as FunctionsTextCompare from '../text/text.compare.functions';
import * as FunctionsTextConfigure from '../text/text.configure.functions';
// IMPORT: FUNCTIONS > ANY
import * as FunctionsAnyCheck from '../any/any.check.functions';
// IMPORT: FUNCTIONS > ARRAY
import * as FunctionsArrayCheck from '../array/array.check.functions';
// IMPORT: FUNCTIONS > BOOLEAN
import * as FunctionsBooleanCheck from '../boolean/boolean.check.functions';
// IMPORT: FUNCTIONS > DATE
import * as FunctionsDateCheck from '../date/date.check.functions';
// IMPORT: FUNCTIONS > NUMBER
import * as FunctionsNumberCheck from '../number/number.check.functions';

/** FUNCTION: CHECK > checkIsValidJSON
 * **************************************************
 * ? - `Description`:
 * **************************************************
 * Checks whether the provided value is both non-null/undefined and represents
 * a valid JSON-like object. It supports validation of actual objects as well as
 * string inputs that can be parsed into JSON objects (excluding arrays).
 *
 * ? - `Parameters`:
 * **************************************************
 * * `value` {any}: The input to be validated.
 *
 * ? - `Purpose`:
 * **************************************************
 * The purpose of this function is to provide a reliable check to ensure that a
 * given value is a valid JSON object. This is useful when working with dynamic
 * inputs, user-supplied data, or values that may be JSON-encoded strings.
 *
 * ? - `Usage`:
 * **************************************************
 * Use this function when you need to safely confirm that a value can be treated
 * as a JSON object, while filtering out invalid values such as arrays, dates,
 * regular expressions, primitives, or malformed JSON strings.
 *
 * ? - `Returns`:
 * **************************************************
 * Returns `true` if `value` is a valid JSON object (plain object or a JSON string
 * that parses into one); `false` otherwise.
 *
 * ? - `Example`:
 * **************************************************
 * `isValidJsonObject({ key: 'value' })` → `true`
 * `isValidJsonObject('{"key":"value"}')` → `true`
 * `isValidJsonObject('[1,2,3]')` → `false`
 * `isValidJsonObject(null)` → `false`
 * **************************************************/
function checkIsValidJSON(valueIn: any) {
  const confirmIsAnObject = (objectIn?: any) => {
    if (valueIn !== null && valueIn !== undefined && typeof objectIn === "object") {
      return (
        !Array.isArray(objectIn)
        && !(objectIn instanceof Date)
        && !(objectIn instanceof RegExp)
      );
    }

    return false;
  };

  confirmIsAnObject(valueIn);

  // If it's a string, try parsing it as JSON
  if (typeof valueIn === "string") {
    try {
      const parsed = JSON.parse(valueIn);
      return confirmIsAnObject(parsed);
    } catch (e) {
      return false;
    }
  }

  // Everything else is invalid
  return false;
}

/** FUNCTION: CHECK > checkIfJSONIsNull
 * **************************************************
 * ? - `Description`:
 * **************************************************
 * Determines if a provided value is 'null' by checking for the following.
 *
 * * Step 01: It checks if the `value` is 'null'.
 * * Step 02: It checks if the `value` is 'undefined'.
 * * Step 03: It checks if the `value` is a valid json object.
 * * Step 04: It checks if the `value` has any keys in it.
 *
 * If Step 01, 02, 03, 04 is true, then the value is null and this function returns 'true'.
 *
 * ? - `Parameters`:
 * **************************************************
 * * `value` {any}: The JSON value to be evaluated.
 *
 * ? - `Purpose`:
 * **************************************************
 * The purpose of this function is to verify whether a JSON value is effectively 'null' or an invalid object,
 * which is important for JSON data validation and processing in various application contexts.
 *
 * ? - `Usage`:
 * **************************************************
 * This function is used in scenarios where the validation of JSON data is required, such as before parsing or processing the JSON data.
 *
 * ? - `Returns`:
 * **************************************************
 * Returns `true` if the JSON value is null, undefined, or not a valid object; `false` otherwise.
 *
 * ? - `Example`:
 * **************************************************
 * * 01: `checkIfJSONIsNull(null)` would return `true`, indicating that the input is not a valid JSON object.
 * * 02: `checkIfJSONIsNull({})` would return `true`, indicating that the input is a valid JSON object, but has not keys, thus it is null.
 * * 03: `checkIfJSONIsNull({ name: null })` would return `false`, indicating that the input is a valid JSON object, and has keys, thus it is NOT null.
 * ************************************************** */
function checkIfJSONIsNull(valueIn: any) {
  if (checkIsValidJSON(valueIn) === true) {
    return Object.keys(valueIn).length === 0;
  }

  return true;
}

/** FUNCTION: CHECK > checkJSONHasField
 * **************************************************
 * ? - `Description`:
 * **************************************************

 * Determines if a provided JSON object contains a specific field, by doing the following.
 *
 * * Firstly checks if the `jsonObject` is valid and not 'null'.
 * * Secondly it then verifies the existence of the specified `fieldName` in the `jsonObject`.
 *
 * ? - `Parameters`:
 * **************************************************

 * * `jsonObject` {any}: The JSON object to be checked.
 * * `fieldName` {string}: The name of the field to check for in the JSON object.
 *
 * ? - `Purpose`:
 * **************************************************

 * The purpose of this function is to ascertain the presence of a specific field within a JSON object,
 * which is essential for validating JSON structures in data processing and manipulation.
 *
 * ? - `Usage`:
 * **************************************************

 * This function is used in scenarios where it's important to verify that a JSON object contains a particular field,
 * such as in data validation, parsing, or before performing operations that require a specific field.
 *
 * ? - `Returns`:
 * **************************************************

 * Returns `true` if the JSON object is valid and contains the specified field; `false` otherwise.
 *
 * ? - `Example`:
 * **************************************************

 * * 01: `checkJSONHasField({ name: 'John', age: 30 }, 'age')` would return `true`, as the 'age' field exists in the object.
 * * 02: `checkJSONHasField({ name: 'John' }, 'birthday')` would return `false`, as the 'birthday' field does not exist in the object.
 * ************************************************** */
function checkJSONHasField(jsonObject: any, fieldName: string): boolean {
  return !checkIfJSONIsNull(jsonObject) && Object.prototype.hasOwnProperty.call(jsonObject, fieldName);
}

/** FUNCTION: CHECK > checkJSONHasFieldAndFieldValueIsNotNull
 * **************************************************
 * ? - `Description`:
 * **************************************************
 * Determines if a provided JSON object contains a specific field, by doing the following.
 *
 * * Firstly checks if the `jsonObject` is valid and not 'null'.
 * * Secondly it then verifies the existence of the specified `fieldName` in the `jsonObject`.
 * * Thirdly it then checks the `jsonObject`, `fieldName`'s value for nullness based on the given `fieldDataType`.
 *
 * ? - `Parameters`:
 * **************************************************
 * * `jsonObject` {any}: The JSON object to be checked.
 * * `fieldName` {string}: The name of the field to check for in the JSON object.
 * * `fieldDataType` {string}: Optional. The data type of the field's value for nullness check. Defaults to 'text'.
 *
 * ? - `Purpose`:
 * **************************************************
 * The purpose of this function is to ensure that a specific field not only exists within a JSON object but also contains a valid, non-null value,
 * which is crucial for comprehensive JSON data validation.
 *
 * ? - `Usage`:
 * **************************************************
 * This function is used in scenarios requiring both the existence and valid value of a field within a JSON object,
 * such as in data processing, validation, or in conditions before further operations.
 *
 * ? - `Returns`:
 * **************************************************
 * Returns `true` if the JSON object contains the specified field and its value is not 'null'; `false` otherwise.
 *
 * ? - `Example`:
 * **************************************************
 * * 01: `checkJSONHasFieldAndFieldValueIsNotNull({ name: 'John', age: 30 }, 'age', 'number')` would return `true`, as 'age' exists and is not null.
 * * 02: `checkJSONHasFieldAndFieldValueIsNotNull({ name: 'John' }, 'age', 'number')` would return `false`, as the 'age' field does not exist or is null.
 * ************************************************** */
function checkJSONHasFieldAndFieldValueIsNotNull(jsonObject: any, fieldName: string, fieldDataType = "text"): boolean {
  if (!checkJSONHasField(jsonObject, fieldName)) { return false };

  const methFieldValue = jsonObject[fieldName];
  const methFieldDataType = FunctionsTextConfigure.textForSearch(fieldDataType);

  switch (methFieldDataType) {
    case "array":
      return !FunctionsArrayCheck.isNull(methFieldValue);
    case "boolean":
    case "flag":
    case "switch":
      return !FunctionsBooleanCheck.isNull(methFieldValue);
    case "date":
      return !FunctionsDateCheck.isNull(methFieldValue);
    case "json":
    case "object":
    case "json-object":
      return !checkIfJSONIsNull(methFieldValue);
    case "number":
    case "digit":
      return !FunctionsNumberCheck.isNull(methFieldValue);
    case "string":
    case "text":
      return !FunctionsTextCheck.isNull(methFieldValue);
    default:
      return !FunctionsAnyCheck.isNull(methFieldValue);
  }
}

/** EXPORT: FUNCTIONS
 * **************************************** */
export {
  checkIsValidJSON as valueIsValid,
  checkIfJSONIsNull as valueIsNull,
  checkJSONHasField as hasField,
  checkJSONHasFieldAndFieldValueIsNotNull as hasFieldAndNullCheck,
}
