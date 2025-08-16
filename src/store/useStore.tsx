export const useStore = (key: string) => {
  const getItem = (key: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    }
  }
  const setItem = (item: object | string | number) => {
    if (typeof window !== 'undefined') {
      const obj = JSON.stringify(item)
      localStorage.setItem(key, obj)
    }
  }

  const removeItem = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key)
    }
  }

  const clearItem = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear()
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
    clearItem,
  }
}
