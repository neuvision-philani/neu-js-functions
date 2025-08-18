/** IMPORT SECTION
 * **************************************** */
function configureFallbackIfAnyValueIsNull(value: any, fallbackValue: any = null): any {
  const fallback = (
    fallbackValue === null || fallbackValue === undefined
      ? null
      : fallbackValue
  );

  return (
    value === null || value === undefined
      ? fallback
      : value
  );
}

/** EXPORT SECTION
 * **************************************** */
export {
  configureFallbackIfAnyValueIsNull as fallbackIfValueIsNull,
  configureFallbackIfAnyValueIsNull as fallback,
  configureFallbackIfAnyValueIsNull as fallbackValue,
}
