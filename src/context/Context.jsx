import { createContext, useContext, useState } from "react";

const currentPhotoContext = createContext();

const Context = ({ children }) => {
  const [currentPhoto, setCurrentPhoto] = useState({});
  return (
    <currentPhotoContext.Provider value={{ currentPhoto, setCurrentPhoto }}>
      {children}
    </currentPhotoContext.Provider>
  );
};

export default Context;

export const useCurrentPhoto = () => useContext(currentPhotoContext);
