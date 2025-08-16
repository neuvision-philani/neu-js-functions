/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsBooleanCheck from './boolean.check.functions';

function compareTwoBooleanValues(boolean_01: any, boolean_02: any): boolean {
  if (!FunctionsBooleanCheck.isNull(boolean_01) && !FunctionsBooleanCheck.isNull(boolean_02)) {
    return boolean_01 === boolean_02;
  }

  return false;
}

/** EXPORT SECTION
 * **************************************** */
export {
  compareTwoBooleanValues as twoValues,
}
