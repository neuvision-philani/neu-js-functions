/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsTextCheck from '../text/text.check.functions';

/** configureTextForSearch
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Processes the provided `value` to make it suitable for search operations.
 * The function trims the value, converts it to upper or lower case based on the `makeUpperCase` flag,
 * and removes all whitespace characters.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {string}: The text to be configured for search.
 * * `makeUpperCase` {boolean}: Optional. If true, converts the text to upper case. Defaults to false.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to standardize text formatting for search operations,
 * ensuring consistent comparison and indexing of search terms.
 *
 * ? - `Usage`:
 * ****************************************
 * This method is typically used in scenarios where text needs to be normalized for searching purposes, like in filters or search queries.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a string that has been trimmed, case-converted, and stripped of whitespace. Returns an empty string if the input is undefined or null.
 *
 * ? - `Example`:
 * ****************************************
 * `configureTextForSearch(' Hello World ', true)` would return 'HELLOWORLD'.
 * **************************************** */
function configureTextForSearch(value: string, makeUpperCase: boolean = false): string {
  if (value === undefined || value === null) return "";

  const trimmedValue = value.trim();
  return (makeUpperCase ? trimmedValue.toUpperCase() : trimmedValue.toLowerCase()).replace(/\s/g, "");
}

/** configureTextFallbackValue
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Processes the given `value` to either return it as is or replace it with a `fallback` string if the value is considered 'null'.
 * It utilizes `FunctionsCheck.nullValue` to determine the nullness of both `value` and `fallback`.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `value` {any}: The value to be checked and potentially replaced.
 * * `fallback` {string}: Optional. The fallback string to use if `value` is 'null'. Defaults to an empty string.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to ensure that a provided value is not 'null', and to offer a controlled fallback option.
 * It's useful for handling cases where certain values are required and a default must be provided if they are absent.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is commonly used in data processing, rendering UI components, or wherever default values are needed for potentially 'null' inputs.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the original `value` if it is not 'null', otherwise returns the `fallback` value. If `fallback` is 'null', it defaults to an empty string.
 *
 * ? - `Example`:
 * ****************************************
 * `configureTextFallbackValue(null, 'default text')` would return 'default text'.
 * **************************************** */
function configureTextFallbackValue(value: any, fallbackValue: string = ""): string {
  return FunctionsTextCheck.isNull(value) ? fallbackValue : value;
}

/** configureTextMultiply
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Multiplies a given text value by a specified number of times. If the multiplication amount is greater than 0, it repeats the text value that many times; otherwise, it returns an empty string.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `valueToMultiply` {string}: The text value to be multiplied.
 * * `multiplyAmount` {number}: The number of times the text value should be repeated. OPTIONAL {default: 1}.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to create a new string by repeating a given text multiple times, which can be useful in string formatting, generating patterns, or visual text displays.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where a string needs to be duplicated a specific number of times, such as in UI elements, data generation, or textual patterns.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns the repeated text if `multiplyAmount` is greater than 0; otherwise, returns an empty string.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `configureTextMultiply('hello', 3)` would return 'hellohellohello', as the text 'hello' is repeated 3 times.
 * * 02: `configureTextMultiply('hello', 0)` would return '', as the multiplication amount is 0.
 * **************************************** */
function configureTextMultiply(valueToMultiply: string, multiplyAmount: number = 1) {
  if (multiplyAmount > 0) {
    return valueToMultiply.repeat(multiplyAmount);
  }
  return '';
}

/** replaceText
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Replaces occurrences of a specified substring within the original text with a new substring. The function allows for case-insensitive replacement and can optionally replace all occurrences of the substring.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `originalText` {string}: The original text in which replacements will be made.
 * * `textToReplace` {string}: The text to be replaced.
 * * `textToReplaceWith` {string}: The text to replace with.
 * * `replaceAllOccurences` {boolean}: Flag to determine whether to replace all occurrences. OPTIONAL {default: false}.
 * * `ignoreCase` {boolean}: Flag to determine whether the search is case-insensitive. OPTIONAL {default: false}.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a flexible and efficient way to modify strings by replacing specified parts of the text, which is useful in formatting data, creating user interfaces, or developing text-processing applications.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios where parts of a string need to be dynamically replaced with other values, such as templating, user input sanitization, or in response to user interactions in a web application.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a new string with the specified replacements applied.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `replaceText('Hello World', 'World', 'Universe', false, false)` would return 'Hello Universe'.
 * * 02: `replaceText('Hello World', 'world', 'Universe', false, false)` would return 'Hello World', demonstrating case-sensitive replacement.
 * * 03: `replaceText('Hello World', 'world', 'Universe', false, true)` would return 'Hello Universe', demonstrating case-insensitive replacement.
 * **************************************** */
function replaceText(originalText: string, textToReplace: string, textToReplaceWith: string, replaceAllOccurences: boolean = false, ignoreCase: boolean = false) {
  if (FunctionsTextCheck.isNull(originalText) || FunctionsTextCheck.isNull(textToReplace)) { return originalText; }

  let flags = '';
  if (replaceAllOccurences) { flags += 'g' };
  if (ignoreCase) { flags += 'i' };

  const regex = new RegExp(textToReplace.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);

  return originalText.replace(regex, textToReplaceWith);
}

/** EXPORT SECTION
 * **************************************** */
export {
  configureTextForSearch as textForSearch,
  configureTextFallbackValue as nullText,
  configureTextFallbackValue as nullString,
  configureTextFallbackValue as fallbackValue,
  configureTextMultiply as textMultiply,
  replaceText as replace,
}
