/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsArrayCheck from './array.check.functions';
import * as FunctionsTextCompare from '../text/text.compare.functions';

/** LOCAL SECTION
 * **************************************** */
function findRecordFromArray(array: any[], searchValue: string, shouldNormalize: boolean = false, returnMode: string = ""): any {
  if (FunctionsArrayCheck.valueIsNull(array)) {
    return null;
  }

  // Find index based on the comparison logic
  const foundIndex = array.findIndex(item => {
    return FunctionsTextCompare.twoValues(item + '', searchValue + '', shouldNormalize);
  });

  // Determine return value based on the findAttribute mode
  switch (returnMode) {
    case "check": return foundIndex !== -1;
    case "index": return foundIndex;
    default: return foundIndex !== -1 ? array[foundIndex] : null;
  }
}

/** EXPORT SECTION
 * **************************************** */
export {
  findRecordFromArray as findRecord,
  findRecordFromArray as find,
}
