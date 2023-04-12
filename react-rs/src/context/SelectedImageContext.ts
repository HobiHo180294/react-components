import { createContext } from 'react';
import { ImageData } from '../services/ImageData';

interface ISelectedImageContextType {
  imageData: ImageData | Record<string, unknown>;
  setImageData: (data: ImageData) => void;
}

export const SelectedImageContext = createContext<ISelectedImageContextType>({
  imageData: {},
  setImageData: () => {},
});
