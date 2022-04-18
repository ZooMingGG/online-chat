import { useState } from 'react';

export const useFetch = callback => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (...params) => {
    try {
      setIsLoading(true);
      await callback(...params);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, isLoading, error];
};
