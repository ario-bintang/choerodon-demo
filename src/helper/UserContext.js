import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const getUsersFromLocalStorage = () => {
  const data = localStorage.getItem('userData');
  return data ? JSON.parse(data) : [];
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(getUsersFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
