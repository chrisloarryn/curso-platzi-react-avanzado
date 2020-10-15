import { useState } from 'react'

export function useHover () {
  const [value, setValue] = useState(false)

  return [value, setValue]
}
