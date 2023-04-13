import { createContext, useState } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [collections, setCollections] = useState([]);
  // Add more state variables if needed

  return (
    <ImageContext.Provider value={{ images, setImages, collections, setCollections }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
