export const removeQuotation = (value: string) => {
  return value?.replace(/^"(.*)"$/, '$1')
}

export const formatDate = (dateStr: string, format: string): string => {
  // "2025-09-07T15:31:01.434891" → Date に変換
  const date = new Date(dateStr)

  // 各部分をゼロ埋め
  const YYYY = date.getFullYear()
  const MM = String(date.getMonth() + 1).padStart(2, '0')
  const DD = String(date.getDate()).padStart(2, '0')
  const hh = String(date.getHours()).padStart(2, '0')
  const mm = String(date.getMinutes()).padStart(2, '0')
  const ss = String(date.getSeconds()).padStart(2, '0')

  // フォーマット文字列を置換
  return format
    .replace('YYYY', String(YYYY))
    .replace('MM', MM)
    .replace('DD', DD)
    .replace('hh', hh)
    .replace('mm', mm)
    .replace('ss', ss)
}
