import { createContext, useState } from 'react';

const MyContext = createContext([]);

const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState('Default Value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };