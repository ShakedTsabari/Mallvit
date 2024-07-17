import React, { createContext, useContext, useState, useEffect } from 'react';

const MallContext = createContext();

export const useMall = () => {
  return useContext(MallContext);
};

export const MallProvider = ({ children }) => {
  const [mall, setMall] = useState(null);

  useEffect(() => {
    const savedMall = localStorage.getItem('selectedMall');
    if (savedMall) {
      setMall(JSON.parse(savedMall));
    }
  }, []);

  useEffect(() => {
    if (mall) {
      localStorage.setItem('selectedMall', JSON.stringify(mall));
    }
  }, [mall]);

  return (
    <MallContext.Provider value={{ mall, setMall }}>
      {children}
    </MallContext.Provider>
  );
};
