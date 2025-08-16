/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsJSONCheck from '../json/json.check.functions';

/** configureFallbackIfJSONValueIsNull
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Configures a fallback value for a JSON value if it is 'null'.
 * It first checks if the fallback value itself is 'null' using `FunctionsJSONCheck.valueIsNull`,
 * and then applies the fallback if the main value is 'null'.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The JSON value to be checked for nullness.
 * * `fallbackValue` {any}: Optional. The fallback value to use if `value` is 'null'. Defaults to null.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a mechanism for setting a fallback value for JSON data in cases where the original value is 'null',
 * ensuring data integrity and consistency in various processing contexts.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where it's necessary to ensure a valid value is always used, particularly when dealing with JSON objects and their fields.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `value` if it is not 'null'; otherwise, returns `fallbackValue`.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `configureFallbackIfJSONValueIsNull(undefined, 'default')` would return 'default', as the original value is null.
 * * 02: `configureFallbackIfJSONValueIsNull('actual value', 'default')` would return 'actual value', as the original value is valid.
 * **************************************** */
function configureFallbackIfJSONValueIsNull(value: any, fallbackValue: any = null): any {
  try {
    const methFallbackValue = FunctionsJSONCheck.valueIsNull(fallbackValue)
      ? null
      : fallbackValue;

    return FunctionsJSONCheck.valueIsNull(value) ? methFallbackValue : value;
  } catch (err) { console.log('ERROR FOUND: ', value); return null; }
}

/** EXPORT SECTION
 * **************************************** */
export {
  configureFallbackIfJSONValueIsNull as fallbackIfJSONValueIsNull,
  configureFallbackIfJSONValueIsNull as fallbackValue,
}
