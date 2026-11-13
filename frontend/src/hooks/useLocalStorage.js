
import { useState } from 'react'

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key)
      return storedValue !== null
        ? JSON.parse(storedValue)
        : initialValue
    } catch {
      return initialValue
    }
  })

  function updateValue(newValue) {
    setValue((previousValue) => {
      const valueToStore =
        typeof newValue === 'function'
          ? newValue(previousValue)
          : newValue

      try {
        localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (error) {
        console.error('Could not save to local storage:', error)
      }

      return valueToStore
    })
  }

  return [value, updateValue]
}

export default useLocalStorage
