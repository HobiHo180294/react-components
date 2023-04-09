import axios from 'axios';
import { useEffect, useState } from 'react';
import { ImageData } from '../services/ImageData';

interface IUseAxiosReturn {
  response: [] | ImageData[];
  isLoading: boolean;
  error: string;
  fetchData: (url: string) => Promise<void>;
}

export const useAxios = (param: string): IUseAxiosReturn => {
  const [response, setResponse] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  axios.defaults.baseURL = 'https://api.unsplash.com';

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
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url: string): Promise<void> => fetchData(url),
  };
};
