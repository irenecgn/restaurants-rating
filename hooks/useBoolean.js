import { useState } from 'react';

export function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const on = () => setValue(true);
  const off = () => setValue(false);

  return { value, on, off };
}
