/** LOCAL SECTION
 * **************************************** */
function findRecordInArray(array: any[], fieldName: string, searchValue: string, shouldNormalize: boolean = true, returnMode: string = ""): any {
  // Initialize the return value based on the return mode
  let result: any = returnMode === "check" ? false : returnMode === "index" ? -1 : null;

  if (Array.isArray(array) && array.length > 0) {
    for (let index = 0; index < array.length; index++) {
      const item = array[index];
      let itemFieldValue = item[fieldName];
      let comparisonValue = searchValue;

      // Normalize values if required
      if (shouldNormalize && typeof itemFieldValue === 'string' && typeof comparisonValue === 'string') {
        itemFieldValue = itemFieldValue.toLowerCase();
        comparisonValue = comparisonValue.toLowerCase();
      }

      // Check if the item's field matches the search value
      if (itemFieldValue === comparisonValue) {
        switch (returnMode) {
          case "check":
            return true;
          case "index":
            return index;
          default:
            return item;
        }
      }
    }
  }

  return result;
}

/** EXPORT SECTION
 * **************************************** */
export {
  findRecordInArray as findRecord,
}
