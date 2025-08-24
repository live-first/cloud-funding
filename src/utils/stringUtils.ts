export default function stringUtils() {
  const removeQuotation = (value: string) => {
    return value.replace(/^"(.*)"$/, '$1')
  }

  return {
    removeQuotation,
  }
}
