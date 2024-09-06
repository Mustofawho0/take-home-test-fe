'use client';
import * as React from 'react';
import { createContext } from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}
const UserContext = createContext({});

export const useUserContext = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('Error!');
  }
  return context;
};

export const ProvidersContext = ({ children }: ProvidersProps) => {
  const [dataUser, setDataUser] = React.useState<string | null | {}>(null);

  const setUser = (user: { name: string; image: string; xacstkn: string }) => {
    setDataUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  // const removeUser = () => {
  //   setDataUser(null);
  //   localStorage.removeItem('user');
  // };

  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setDataUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ dataUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
