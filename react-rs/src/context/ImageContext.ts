import { createContext } from 'react';
import { ImageData } from '../services/ImageData';

interface IImageContext {
  response: [] | ImageData[];
  isLoading: boolean;
  error: string;
  searchTitle: string;
  fetchData?: (url: string) => Promise<void>;
  setSearchTitle?: (imageTitle: string) => void;
}

export const ImageContext = createContext<IImageContext>({
  response: [],
  isLoading: false,
  error: '',
  searchTitle: '',
});
