/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsArrayCheck from '../../array/array.check.functions';
import * as FunctionsAnyCheck from '../../any/any.check.functions';
import * as FunctionsBooleanCheck from '../../boolean/boolean.check.functions';
import * as FunctionsDateCheck from '../../date/date.check.functions';
import * as FunctionsJSONGet from '../../json/json.get.functions';
import * as FunctionsJSONArrayCheck from '../../json/array/json.array.check.functions';
import * as FunctionsNumberCheck from '../../number/number.check.functions';
import * as FunctionsTextCheck from '../../text/text.check.functions';
import * as FunctionsTextConfigure from '../../text/text.configure.functions';

/** jsonArraySortField
 * ----------------------------------------
 * ? - `Description`:
 * ****************************************
 * Sorts an array of JSON objects based on a specified field. Supports sorting by different data types and can handle descending order, normalization of strings, and special 'equivalent' values.
 *
 * ? - `Parameters`:
 * ****************************************
 * * `array` {any[]}: The array of JSON objects to be sorted.
 * * `fieldName` {string}: The field name in the JSON objects to sort by.
 * * `fieldNameDataType` {string}: The data type of the fieldName ('string', 'number', etc.).
 * * `descendingOrderFlag` {boolean} [default: false]: Set to true for descending order sorting.
 * * `considerAllFlag` {boolean} [default: false]: When true, certain values are considered equivalent.
 * * `considerAllValue` {any[]} [default: ["All"]]: Values considered equivalent if `considerAllFlag` is true.
 * * `normalize` {boolean} [default: true]: Normalizes string comparisons if true.
 *
 * ? - `Purpose`:
 * ****************************************
 * The function provides a versatile sorting mechanism for arrays of JSON objects, accommodating various sorting preferences and conditions, essential for data processing and display.
 *
 * ? - `Usage`:
 * ****************************************
 * Ideal for sorting data in web applications, especially when dealing with user-generated content or datasets requiring specific sorting criteria.
 *
 * ? - `Returns`:
 * ****************************************
 * Returns a sorted array based on the provided parameters and sorting conditions.
 *
 * ? - `Example`:
 * ****************************************
 * * 01: `jsonArraySortField([{name: "Alice"}, {name: "Bob"}], 'name', 'string')` sorts by the 'name' field in ascending order.
 * * 02: `jsonArraySortField([{age: 30}, {age: 25}], 'age', 'number', true)` sorts by the 'age' field in descending order.
 * **************************************** */
function jsonArraySortField(array: any[], fieldName: string, fieldNameDataType: string, descendingOrderFlag: boolean = false, considerAllFlag: boolean = false, considerAllValue: any[] = ["Select All"], normalize: boolean = true): any[] {
  const methFieldNameDataType = FunctionsTextConfigure.textForSearch(fieldNameDataType);
  const methConsiderAllValue: any[] = [];


  switch (methFieldNameDataType) {
    case 'boolean':
      considerAllValue.forEach((forEachItem) => { methConsiderAllValue.push(FunctionsBooleanCheck.valueIsNull(forEachItem) ? false : forEachItem); });
      break;
    case 'date':
      considerAllValue.forEach((forEachItem) => { methConsiderAllValue.push(FunctionsDateCheck.valueIsNull(forEachItem) ? 0 : forEachItem.getTime()); });
      break;
    case 'number':
      considerAllValue.forEach((forEachItem) => { methConsiderAllValue.push(FunctionsNumberCheck.valueIsNull(forEachItem) ? 0 : forEachItem); });
      break;
    case 'string':
    case 'text':
      considerAllValue.forEach((forEachItem) => {
        methConsiderAllValue.push(FunctionsTextCheck.valueIsNull(forEachItem) ? '' : normalize ? FunctionsTextConfigure.textForSearch(forEachItem) : forEachItem);
      });
      break;
    default:
      considerAllValue.forEach((forEachItem) => { methConsiderAllValue.push(FunctionsAnyCheck.valueIsNull(forEachItem) ? null : forEachItem); });
      break;
  }
  // console.log('methConsiderAllValue: ', methConsiderAllValue);

  const methArrayConsiderAllValue: any[] = [];
  const methArrayTopRecords: any[] = [];
  // console.log('jsonArraySortField - array: ', array);
  const mathArray = array.map(
    (item) => {
      const methFieldValue = FunctionsJSONGet.fieldValue(item, fieldName, fieldNameDataType);
      // console.log('methFieldValue: ', methFieldValue);
      let sortMeFieldValue: any;

      switch (methFieldNameDataType) {
        case 'boolean':
          sortMeFieldValue = FunctionsBooleanCheck.valueIsNull(methFieldValue) ? false : methFieldValue;
          break;
        case 'date':
          sortMeFieldValue = FunctionsDateCheck.valueIsNull(methFieldValue) ? 0 : methFieldValue.getTime();
          break;
        case 'number':
          sortMeFieldValue = FunctionsNumberCheck.valueIsNull(methFieldValue) ? 0 : methFieldValue;
          break;
        case 'string':
        case 'text':
          sortMeFieldValue = FunctionsTextCheck.valueIsNull(methFieldValue) ? '' : normalize ? FunctionsTextConfigure.textForSearch(methFieldValue) : methFieldValue;
          break;
        default:
          sortMeFieldValue = FunctionsAnyCheck.valueIsNull(methFieldValue) ? null : methFieldValue;
          break;
      }

      return { ...item, sortMe: sortMeFieldValue + '' };
    }
  );

  let mathArraySorted = [];
  switch (methFieldNameDataType) {
    case 'string':
    case 'text':
      mathArraySorted = mathArray.sort((a, b) => { return a.sortMe.localeCompare(b.sortMe); });
      break;
    default:
      mathArraySorted = mathArray.sort((a, b) => { return descendingOrderFlag ? b["sortMe"] - a["sortMe"] : a["sortMe"] - b["sortMe"]; });
      break;
  }

  const returnValue = mathArraySorted
    .map((item) => {
      if (considerAllFlag && methConsiderAllValue.includes(item["sortMe"])) { methArrayConsiderAllValue.push(item); return null; }
      delete item["sortMe"];
      return { ...item };
    })
    .filter((item) => item !== null);

  for (let index = 0; index < methConsiderAllValue.length; index++) {
    const forItem = methConsiderAllValue[methConsiderAllValue.length - (index + 1)];

    if (forItem) {
      const forTopRecord = FunctionsJSONArrayCheck.findRecord(methArrayConsiderAllValue, "sortMe", forItem + '', true);

      if (forTopRecord) { delete forTopRecord["sortMe"]; methArrayTopRecords.push(forTopRecord); }
    }
  }

  if (!FunctionsArrayCheck.valueIsNull(methArrayTopRecords)) { methArrayTopRecords.forEach((argTopRecord) => { returnValue.unshift({ ...argTopRecord }); }); }

  return returnValue;
}

/** EXPORT SECTION
 * **************************************** */
export {
  jsonArraySortField as sortField,
}
