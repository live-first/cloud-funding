export const useStore = (key: string) => {
  const getItem = () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(key)
    }
  }
  const setItem = (item: object | string | number) => {
    if (typeof window !== 'undefined') {
      const obj = JSON.stringify(item)
      sessionStorage.setItem(key, obj)
    }
  }

  const removeItem = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(key)
    }
  }

  const clearItem = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.clear()
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
    clearItem,
  }
}
