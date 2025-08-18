/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsAnyCompare from '../any/any.compare.functions';
import * as FunctionsArrayCompare from '../array/array.compare.functions';
import * as FunctionsBooleanCompare from '../boolean/boolean.compare.functions';
import * as FunctionsDateCompare from '../date/date.compare.functions';
import * as FunctionsJSONCheck from '../json/json.check.functions';
import * as FunctionsJSONGet from '../json/json.get.functions';
import * as FunctionsNumberCompare from '../number/number.compare.functions';
import * as FunctionsTextCompare from '../text/text.compare.functions';
import * as FunctionsTextConfigure from '../text/text.configure.functions';

/** compareTwoJSONObjects
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Compares two objects deeply to determine if they are equal. It checks if both arguments are objects and then compares their properties and values recursively. This function is designed to compare objects even if they are nested or contain complex structures.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `object_01` {Object}: The 1st object to be compared.
 * * `object_02` {Object}: The 2nd object to be compared.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide an accurate way to compare objects in JavaScript, considering that objects are reference types and simple equality checks are not sufficient for a true comparison.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is useful in scenarios where a deep level comparison of object contents is required, such as in state comparisons in UI frameworks, data validation, or testing.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if both objects are deeply equal; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * `compareTwoJSONObjects({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })` would return `true`, as both objects have identical structure and values.
 * **************************************** */
function compareTwoJSONObjects(object_01: any, object_02: any): boolean {
  try {
    // Check if both arguments are objects
    if (!FunctionsJSONCheck.valueIsNull(object_01) && !FunctionsJSONCheck.valueIsNull(object_02)) {
      // Get the keys of both objects
      const keys1 = Object.keys(object_01);
      const keys2 = Object.keys(object_02);

      // Check if the number of properties is the same
      if (keys1.length !== keys2.length) { return false; }

      // Check if all properties in object_01 are in object_02 and equal
      for (const key of keys1) {
        if (!keys2.includes(key) || !compareTwoJSONObjects(object_01[key], object_02[key])) {
          return false;
        }
      }

      return true;
    } else {
      // If not objects or null, check for equality
      return object_01 === object_02;
    }
  } catch (err) { console.log('ERROR ENCOUNTERED!', err); return false; }
}

/** compareJSONFieldAgainstValue
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Compares a specified field's value in a JSON object against a provided value, based on a specified data type. It utilizes various appFunctions modules to perform type-specific comparisons between the field's value and the againstValue.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `jsonObject` {any}: The JSON object containing the field to compare.
 * * `fieldName` {string}: The name of the field in the JSON object whose value is to be compared.
 * * `againstValue` {any}: The value to compare against the JSON field's value.
 * * `dataType` {string}: Optional. Specifies the type of data for the comparison. Defaults to 'string'.
 * * `normalise` {boolean}: Optional. should the comparison first normalise the 2 values being checked. Defaults to true.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a flexible and type-sensitive method of comparing a JSON object's field value to a specified value,
 * accommodating different data types and comparison methods.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios involving JSON data validation or processing, especially when comparing field values for conditions or changes.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the JSON field's value matches `againstValue`, considering the specified `dataType`; `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `compareJSONFieldAgainstValue({ age: 30 }, 'age', 30, 'number')` would return `true`, as the 'age' field's value matches the provided number.
 * * 02: `compareJSONFieldAgainstValue({ name: 'John' }, 'name', 'Jane', 'text')` would return `false`, as the 'name' field's value does not match the provided string.
 * **************************************** */
function compareJSONFieldAgainstValue(jsonObject: any, fieldName: string, againstValue: any, dataType: string = 'string', normalise: boolean = true): boolean {
  try {
    const methDataType = FunctionsTextConfigure.textForSearch(dataType);
    const methJSONFieldValue = FunctionsJSONGet.fieldValue(jsonObject, fieldName, dataType);

    switch (methDataType) {
      case 'array':
        return FunctionsArrayCompare.twoValues(methJSONFieldValue, againstValue);
      case 'boolean':
        return FunctionsBooleanCompare.twoValues(methJSONFieldValue, againstValue);
      case 'date':
        return FunctionsDateCompare.twoValues(methJSONFieldValue, againstValue);
      case 'json':
        return compareTwoJSONObjects(methJSONFieldValue, againstValue);
      case 'number':
        return FunctionsNumberCompare.twoValues(methJSONFieldValue, againstValue);
      case 'string':
      case 'text':
        return FunctionsTextCompare.twoValues(methJSONFieldValue + '', againstValue + '', normalise);
      default:
        return FunctionsAnyCompare.twoValues(methJSONFieldValue, againstValue);
    }
  } catch (err) { console.log('ERROR ENCOUNTERED - compareJSONFieldAgainstValue!', err); return false; }
}

/** EXPORT SECTION
 * **************************************** */
export {
  compareTwoJSONObjects as twoValues,
  compareJSONFieldAgainstValue as fieldAgainstValue,
}
