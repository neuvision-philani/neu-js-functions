/** LOCAL SECTION
 * **************************************** */
function isAnyValueNull(value: any): boolean {
  return value === null || value === undefined;
}

/** EXPORT SECTION
 * **************************************** */
export {
  isAnyValueNull as isNull,
  isAnyValueNull as valueIsNull,
}
