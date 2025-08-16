/** LOCAL SECTION
 * **************************************** */
function compareTwoAnyValues(value_01: any, value_02: any): boolean {
  if (value_01 === null || value_01 === undefined || value_02 === null || value_02 === undefined) {
    return false;
  }

  return value_01 === value_02;
}

/** EXPORT SECTION
 * **************************************** */
export {
  compareTwoAnyValues as twoValues,
}
