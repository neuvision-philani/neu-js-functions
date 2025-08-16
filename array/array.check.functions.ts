/** LOCAL SECTION
 * **************************************** */
function checkIfArrayObjectIsNull(value: any): boolean {
  return value === null || value === undefined || !checkIfValidArrayObject(value) || value.length < 1;
}

function checkIfValidArrayObject(value: any): boolean {
  return Array.isArray(value);
}

/** EXPORT SECTION
 * **************************************** */
export {
  checkIfArrayObjectIsNull as valueIsNull,
  checkIfValidArrayObject as isValidArrayObject,
}
