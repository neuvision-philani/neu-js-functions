/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsCheckText from '../../text/text.check.functions';
import * as FunctionsConfigureText from '../../text/text.configure.functions';
import * as FunctionsCompareText from '../../text/text.compare.functions';
import * as FunctionsConfigureBoolean from '../../boolean/boolean.configure.functions';
import * as FunctionsCheckArray from '../../array/array.check.functions';

function jsonArrayFindRecord(argArray: any[], argField: string, argSearchValue: string, argNormalizeSearchValues = false, argFindAttribute = ""): any {
  let returnValue: any = null;
  let methRecord: any;
  const methArray: any[] = argArray;
  const methField: string = FunctionsConfigureText.fallbackValue(argField);
  const methSearchValue: string = FunctionsConfigureText.fallbackValue(argSearchValue);
  const methNormalizeSearchValues: boolean = FunctionsConfigureBoolean.fallbackValue(
    argNormalizeSearchValues
  );
  const methFindAttribute: string = FunctionsConfigureText.fallbackValue(argFindAttribute);

  const configureTextForSearch = (value: string) => { return FunctionsConfigureText.textForSearch(value); };

  switch (configureTextForSearch(methFindAttribute)) {
    case configureTextForSearch("check"):
      returnValue = false;
      break;
    case configureTextForSearch("index"):
      returnValue = -1;
      break;
    default:
      returnValue = null;
      break;
  }

  if (!FunctionsCheckArray.valueIsNull(methArray)) {
    methRecord = methArray.find((argItem: any, argIndex: number) => {
      if (
        FunctionsCompareText.twoValues(
          argItem[methField],
          methSearchValue,
          methNormalizeSearchValues
        )
      ) {
        switch (configureTextForSearch(methFindAttribute)) {
          case configureTextForSearch("check"):
            returnValue = true;
            break;
          case configureTextForSearch("index"):
            returnValue = argIndex;
            break;
          case configureTextForSearch("record"):
            returnValue = argItem;
            break;
          default:
            returnValue = argItem;
            break;
        }
        return argItem;
      }
    });
  }


  return returnValue;
}

function jsonArrayRemoveDuplicates(argOriginalArray: any[], argField: any): any[] {
  /** methVariabless
   * ---------------------------------------- */
  const methLookupObject: any = {};
  let returnValue: any[] = [];

  /** methMisc */
  returnValue = Object.keys(
    argOriginalArray.reduce((prev, next) => {
      if (!methLookupObject[next[argField]]) {
        methLookupObject[next[argField]] = next;
      }
      return methLookupObject;
    }, methLookupObject)
  ).map((i) => methLookupObject[i]);

  /** methOutcome */
  return returnValue;
}

function jsonArrayFilter(argOriginalArray: any[], argFieldName: any, argFilterValue: string, argFilterFor: boolean, argNormalizeSearch: boolean): any {
  /** methVariabless
   * ---------------------------------------- */
  let returnValue = [];
  const methFilterFor: boolean = FunctionsConfigureBoolean.fallbackValue(
    argFilterFor,
    false
  );

  /** methMisc */
  returnValue = argOriginalArray.filter((argRecord) => {
    if (methFilterFor) {
      return FunctionsCompareText.twoValues(
        argRecord[argFieldName],
        argFilterValue,
        argNormalizeSearch
      );
    } else {
      return !FunctionsCompareText.twoValues(
        argRecord[argFieldName],
        argFilterValue,
        argNormalizeSearch
      );
    }
  });

  /** methOutcome */
  return returnValue;
}

function jsonArrayFilterFromString(originalArray: any[], filterCondition: string, startDate: Date = new Date(), endDate: Date = new Date()): any[] {
  // Validate input array
  if (!Array.isArray(originalArray) || originalArray.length === 0) {
    return [];
  }

  // Sanitize the filter condition by removing unnecessary characters
  let sanitizedCondition = filterCondition.replace(/{|}/g, '').trim();

  // Return the original array if the condition is empty after sanitization
  if (sanitizedCondition.length === 0) {
    return originalArray;
  }

  // Wrap the condition in a return statement for the dynamic function
  sanitizedCondition = `return (${sanitizedCondition});`;

  // Initialize the dynamic filter function
  let dynamicFilter: any;
  try {
    dynamicFilter = new Function('item', 'startDate', 'endDate', sanitizedCondition);
  } catch (error) {
    console.error('Error creating dynamic filter function:', error);
    return []; // Return an empty array in case of an error
  }

  // Filter the original array using the dynamic function
  try {
    return originalArray.filter(item => dynamicFilter(item, startDate, endDate));
  } catch (error) {
    console.error('Error executing dynamic filter:', error);
    return []; // Return an empty array in case of an error
  }
}


/** EXPORT SECTION
 * **************************************** */
export {
  jsonArrayFindRecord as find,
  jsonArrayFindRecord as findRecord,
  jsonArrayRemoveDuplicates as removeDuplicates,
  jsonArrayFilter as filter,
  jsonArrayFilterFromString as filterFromString,
}
