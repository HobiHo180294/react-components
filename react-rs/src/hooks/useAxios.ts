import axios from 'axios';
import { useEffect, useState } from 'react';
import { ImageData } from '../services/ImageData';

const setAxiosDefaults = (baseURL: string, timeout: number): void => {
  axios.defaults.baseURL = baseURL;
  axios.defaults.timeout = timeout;
};

interface IUseAxiosReturn {
  response: [] | ImageData[];
  isLoading: boolean;
  error: string;
  fetchData: (url: string) => Promise<void>;
}

export const useAxios = (endpoint: string): IUseAxiosReturn => {
  const [response, setResponse] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  setAxiosDefaults('https://api.unsplash.com', 5000);

  const fetchData = async (url: string): Promise<void> => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err: unknown) {
      setError(JSON.stringify(err));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(endpoint);
  }, [endpoint]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url: string): Promise<void> => fetchData(url),
  };
};
