/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsJSONCheck from '../json/json.check.functions';

/** getJSONFieldValue
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Retrieves the value of a specified field from a JSON object if the field exists and its value
 * is not 'null' according to the specified data type. If the field does not exist or its value is 'null',
 * a specified null value is returned.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `jsonObject` {any}: The JSON object from which to retrieve the field value.
 * * `fieldName` {string}: The name of the field whose value is to be retrieved.
 * * `fieldDataType` {string}: The data type to use for nullness check of the field's value.
 * * `nullValue` {any}: Optional. The value to return if the field is not found or its value is 'null'. Defaults to null.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to safely extract a field's value from a JSON object,
 * ensuring the field exists and contains a valid value,
 * which is essential for reliable data extraction and processing.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where extracting a field's value from a JSON object is necessary,
 * with additional validation of the field's existence and value integrity.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the field's value from the JSON object if valid; otherwise, returns the specified `nullValue`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getJSONFieldValue({ name: 'John', age: 30 }, 'age', 'number', -1)` would return `30`, as 'age' exists and is valid.
 * * 02: `getJSONFieldValue({ name: 'John' }, 'age', 'number', -1)` would return `-1`, as the 'age' field does not exist or is null.
 * **************************************** */
function getJSONFieldValue(jsonObject: any, fieldName: string, fieldDataType: string, nullValue: any = null): any {
  return FunctionsJSONCheck.hasFieldAndNullCheck(jsonObject, fieldName, fieldDataType)
    ? jsonObject[fieldName]
    : nullValue;

}

/** getJSONFieldValueAny
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Retrieves the value of a specified field from a JSON object, treating the field's value as of any type. If the field does not exist or its value is 'null', a specified null value is returned. The function uses `getJSONFieldValue` with a data type of 'any'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `jsonObject` {any}: The JSON object from which to retrieve the field value.
 * * `fieldName` {string}: The name of the field whose value is to be retrieved.
 * * `nullValue` {any}: Optional. The value to return if the field is not found or its value is 'null'. Defaults to null.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to extract a field's value from a JSON object without enforcing a specific data type, providing a fallback value in cases where the field is 'null' or does not exist.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when a field's value of any type needs to be extracted from a JSON object, with validation for non-existence or nullness.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the value of the field from the JSON object if valid; otherwise, returns the specified `nullValue`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getJSONFieldValueAny({ key: 'value' }, 'key', 'default')` would return 'value', as the 'key' field exists and is valid.
 * * 02: `getJSONFieldValueAny({ key: 'value' }, 'nonexistent', 'default')` would return 'default', as the 'nonexistent' field does not exist or is null.
 * **************************************** */
function getJSONFieldValueAny(jsonObject: any, fieldName: string, nullValue: any = null): any {
  return getJSONFieldValue(jsonObject, fieldName, 'any', nullValue);
}

/** getJSONFieldValueArray
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Retrieves the array value of a specified field from a JSON object. If the field does not exist or its value is 'null', a specified array null value is returned. The function employs `getJSONFieldValue` with a data type of 'array'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `jsonObject` {any}: The JSON object from which to retrieve the field value.
 * * `fieldName` {string}: The name of the field whose array value is to be retrieved.
 * * `nullValue` {any[]}: Optional. The array value to return if the field is not found or its value is 'null'. Defaults to an empty array.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to extract an array field's value from a JSON object, providing a fallback array in cases where the field is 'null' or does not exist.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when a specific array field's value needs to be extracted from a JSON object, with validation for non-existence or nullness.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the array value of the field from the JSON object if valid; otherwise, returns the specified `nullValue`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getJSONFieldValueArray({ items: [1, 2, 3] }, 'items', [])` would return `[1, 2, 3]`, as the 'items' field exists and is valid.
 * * 02: `getJSONFieldValueArray({ name: 'John' }, 'items', [])` would return `[]`, as the 'items' field does not exist or is null.
 * **************************************** */
function getJSONFieldValueArray(jsonObject: any, fieldName: string, nullValue: any[] = []): any {
  return getJSONFieldValue(jsonObject, fieldName, 'array', nullValue);
}

/** getJSONFieldValueBoolean
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Retrieves the boolean value of a specified field from a JSON object. If the field does not exist or its value is 'null', a specified boolean null value is returned. This function utilizes `getJSONFieldValue` with a data type of 'boolean'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `jsonObject` {any}: The JSON object from which to retrieve the field value.
 * * `fieldName` {string}: The name of the field whose boolean value is to be retrieved.
 * * `nullValue` {boolean}: Optional. The boolean value to return if the field is not found or its value is 'null'. Defaults to false.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to extract a boolean field's value from a JSON object, providing a fallback boolean value in cases where the field is 'null' or does not exist.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when a specific boolean field's value needs to be extracted from a JSON object, with validation for non-existence or nullness.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the boolean value of the field from the JSON object if valid; otherwise, returns the specified `nullValue`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getJSONFieldValueBoolean({ isActive: true }, 'isActive', false)` would return `true`, as the 'isActive' field exists and is valid.
 * * 02: `getJSONFieldValueBoolean({ name: 'John' }, 'isActive', false)` would return `false`, as the 'isActive' field does not exist or is null.
 * **************************************** */
function getJSONFieldValueBoolean(jsonObject: any, fieldName: string, nullValue: boolean = false): boolean {
  return getJSONFieldValue(jsonObject, fieldName, 'boolean', nullValue);
}

/** getJSONFieldValueDate
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Retrieves the date value of a specified field from a JSON object. If the field does not exist or its value is 'null', a specified date null value is returned. This function employs `getJSONFieldValue` with a data type of 'date'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `jsonObject` {any}: The JSON object from which to retrieve the field value.
 * * `fieldName` {string}: The name of the field whose date value is to be retrieved.
 * * `nullValue` {Date}: Optional. The date value to return if the field is not found or its value is 'null'. Defaults to null.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to extract a date field's value from a JSON object, providing a fallback date value in cases where the field is 'null' or does not exist.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when a specific date field's value needs to be extracted from a JSON object, with validation for non-existence or nullness.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the date value of the field from the JSON object if valid; otherwise, returns the specified `nullValue`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getJSONFieldValueDate({ birthDate: new Date('1990-01-01') }, 'birthDate', new Date())` would return `new Date('1990-01-01')`, as the 'birthDate' field exists and is valid.
 * * 02: `getJSONFieldValueDate({ name: 'John' }, 'birthDate', new Date())` would return `new Date()`, as the 'birthDate' field does not exist or is null.
 * **************************************** */
function getJSONFieldValueDate(jsonObject: any, fieldName: string, nullValue: (Date | null) = null): any {
  return getJSONFieldValue(jsonObject, fieldName, 'date', nullValue);
}

/** getJSONFieldValueObject
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Retrieves the value of a specified field from a JSON object, treating the field's value as a JSON object. If the field does not exist or its value is 'null', a specified null value is returned. This function utilizes `getJSONFieldValue` with a data type of 'json'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `jsonObject` {any}: The JSON object from which to retrieve the field value.
 * * `fieldName` {string}: The name of the field whose value is to be retrieved as a JSON object.
 * * `nullValue` {any}: Optional. The value to return if the field is not found or its value is 'null'. Defaults to null.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to extract a field's value from a JSON object, specifically treating the field's value as another JSON object,
 * ensuring proper handling of nested JSON structures.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when a specific field's value, expected to be a JSON object, needs to be extracted from a larger JSON structure,
 * with validation against null values.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the field's JSON object value from the larger JSON object if valid; otherwise, returns the specified `nullValue`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getJSONFieldValueObject({ user: { name: 'John' } }, 'user', {})` would return `{ name: 'John' }`.
 * * 02: `getJSONFieldValueObject({ user: 'John' }, 'profile', {})` would return `{}`, as 'profile' field does not exist or is null.
 * **************************************** */
function getJSONFieldValueObject(jsonObject: any, fieldName: string, nullValue: any = null): any {
  return getJSONFieldValue(jsonObject, fieldName, 'json', nullValue);
}

/** getJSONFieldValueNumber
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Retrieves the numeric value of a specified field from a JSON object. If the field does not exist or its value is 'null', a specified numeric null value is returned. This function uses `getJSONFieldValue` with a data type of 'number'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `jsonObject` {any}: The JSON object from which to retrieve the field value.
 * * `fieldName` {string}: The name of the field whose numeric value is to be retrieved.
 * * `nullValue` {number}: Optional. The numeric value to return if the field is not found or its value is 'null'. Defaults to null.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to extract a numeric field's value from a JSON object, providing a fallback numeric value in cases where the field is 'null' or does not exist.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when a specific numeric field's value needs to be extracted from a JSON object, with validation for non-existence or nullness.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the numeric value of the field from the JSON object if valid; otherwise, returns the specified `nullValue`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getJSONFieldValueNumber({ age: 30 }, 'age', -1)` would return `30`, as the 'age' field exists and is valid.
 * * 02: `getJSONFieldValueNumber({ name: 'John' }, 'age', -1)` would return `-1`, as the 'age' field does not exist or is null.
 * **************************************** */
function getJSONFieldValueNumber(jsonObject: any, fieldName: string, nullValue: (number | null) = null): any {
  return getJSONFieldValue(jsonObject, fieldName, 'number', nullValue);
}

/** getJSONFieldValueText
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Retrieves the text (string) value of a specified field from a JSON object. If the field does not exist or its value is 'null', a specified text null value is returned. This function utilizes `getJSONFieldValue` with a data type of 'string'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `jsonObject` {any}: The JSON object from which to retrieve the field value.
 * * `fieldName` {string}: The name of the field whose text value is to be retrieved.
 * * `nullValue` {string}: Optional. The text value to return if the field is not found or its value is 'null'. Defaults to an empty string.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to extract a text field's value from a JSON object, providing a fallback text value in cases where the field is 'null' or does not exist.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used when a specific text field's value needs to be extracted from a JSON object, with validation for non-existence or nullness.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the text value of the field from the JSON object if valid; otherwise, returns the specified `nullValue`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `getJSONFieldValueText({ name: 'John' }, 'name', 'N/A')` would return 'John', as the 'name' field exists and is valid.
 * * 02: `getJSONFieldValueText({ age: 30 }, 'name', 'N/A')` would return 'N/A', as the 'name' field does not exist or is null.
 * **************************************** */
function getJSONFieldValueText(jsonObject: any, fieldName: string, nullValue: string = ''): any {
  return getJSONFieldValue(jsonObject, fieldName, 'string', nullValue);
}

/** EXPORT SECTION
 * **************************************** */
export {
  getJSONFieldValue as fieldValue,
  getJSONFieldValueAny as fieldValueAny,
  getJSONFieldValueArray as fieldValueArray,
  getJSONFieldValueBoolean as fieldValueBoolean,
  getJSONFieldValueDate as fieldValueDate,
  getJSONFieldValueObject as fieldValueObject,
  getJSONFieldValueObject as fieldValueJSON,
  getJSONFieldValueNumber as fieldValueNumber,
  getJSONFieldValueText as fieldValueText,
  getJSONFieldValueText as fieldValueString,
}
