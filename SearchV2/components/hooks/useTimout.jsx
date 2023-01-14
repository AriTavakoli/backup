import { useState, useEffect } from 'react';

export default function useTimeout(searchTerm) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [searchTerm]);

  return loading;
}