/** IMPORTS SECTION
 * **************************************** */
import * as FunctionsArrayCheck from './array.check.functions';

/** LOCAL SECTION
 * **************************************** */
function configureNullFallbackValue(value: any[], fallbackValue: any[] = [], splice: boolean = false): any[] {
  return FunctionsArrayCheck.valueIsNull(value)
    ? splice
      ? [...fallbackValue]
      : fallbackValue
    : splice
      ? [...value]
      : value;
}

/** EXPORT SECTION
 * **************************************** */
export {
  configureNullFallbackValue as nullFallbackValue,
  configureNullFallbackValue as fallbackValue,
}
