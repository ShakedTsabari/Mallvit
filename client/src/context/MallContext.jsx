import React, { createContext, useState, useContext } from 'react';

const MallContext = createContext();

export const useMall = () => useContext(MallContext);

export const MallProvider = ({ children }) => {
    const [mall, setMall] = useState(null);

    return (
        <MallContext.Provider value={{ mall, setMall }}>
            {children}
        </MallContext.Provider>
    );
};
