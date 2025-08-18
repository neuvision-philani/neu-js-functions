/** IMPORT SECTION
 * **************************************** */
import * as FunctionsArrayCheck from './array.check.functions';

/** LOCAL SECTION
 * **************************************** */
function compareTwoArrayObjects(array_01: any[], array_02: any[]): boolean {
  if (FunctionsArrayCheck.valueIsNull(array_01) || !FunctionsArrayCheck.valueIsNull(array_02)) { return false; }

  if (array_01.length !== array_02.length) { return false; }

  for (let i = 0; i < array_01.length; i++) { if (array_01[i] !== array_02[i]) { return false; } }

  return true;
}


/** EXPORT SECTION
 * **************************************** */
export {
  compareTwoArrayObjects as twoValues,
}
