import { useState } from 'react';

export const useFetch = callback => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // eslint-disable-next-line consistent-return
  const request = async (...params) => {
    try {
      setIsLoading(true);
      const response = await callback(...params);
      return response;
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [request, isLoading, error];
};
