/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsBooleanCheck from '../boolean/boolean.check.functions';

/** LOCAL SECTION
 * **************************************** */
function configureBooleanFallbackValue(value: any, fallbackValue: boolean = false): boolean {
  return FunctionsBooleanCheck.isNull(value) ? fallbackValue : value;
}

/** EXPORT SECTION
 * **************************************** */
export {
  configureBooleanFallbackValue as fallbackValue,
}
