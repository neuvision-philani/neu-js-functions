/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsTextConfigure from '../text/text.configure.functions';
import * as FunctionsTextCheck from '../text/text.check.functions';

/** compareTwoTextValues
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Compares two text values for equality, with an option to normalize them before comparison. It first converts null or undefined values to empty strings, checks if both are null, and then optionally normalizes them for a case-insensitive and whitespace-insensitive comparison.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `text_01` {string}: The first text value to be compared.
 * * `text_02` {string}: The second text value to be compared.
 * * `normalize` {boolean}: Optional. Determines whether to normalize the text values before comparison. Defaults to true.
 *
 * ? - `Purpose`:
 * ****************************************
 * The purpose of this function is to provide a flexible and reliable way to compare text values,
 * accommodating cases where text formatting might vary, such as different cases or extra spaces.
 *
 * ? - `Usage`:
 * ****************************************
 * This function is used in scenarios requiring text comparison,
 * such as in data validation, search functionality,
 * or input matching, where normalization might be necessary.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns `true` if the text values are equal (considering normalization if enabled); `false` otherwise.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `compareTwoTextValues('hello', 'Hello')` would return `true` when normalized, as it ignores case differences.
 * * 02: `compareTwoTextValues('hello', 'world', false)` would return `false`, as the texts are different without normalization.
 * **************************************** */
function compareTwoTextValues(text_01: string, text_02: string, normalize = true): boolean {
  try {
    let methText_01 = FunctionsTextConfigure.nullText(text_01);
    let methText_02 = FunctionsTextConfigure.nullText(text_02);

    if (FunctionsTextCheck.valueIsNull(methText_01) && FunctionsTextCheck.valueIsNull(methText_02)) { return true; }

    if (normalize) {
      methText_01 = FunctionsTextConfigure.textForSearch(methText_01);
      methText_02 = FunctionsTextConfigure.textForSearch(methText_02);
    }

    return methText_01 === methText_02;
  } catch (err) { console.log('ERROR ENCOUNTERED!', err); return false; }
}

/** EXPORT SECTION
 * **************************************** */
export {
  compareTwoTextValues as twoValues,
}
