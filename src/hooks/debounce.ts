import { useState, useEffect } from "react";

export const useDebounce = (value: string, delay: number = 500): string => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const debHandler = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(debHandler);
  }, [value, delay]);
  return debounced;
};
