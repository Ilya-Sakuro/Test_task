import React, { useState } from 'react';

export const ClientsContext = React.createContext();

export const ClientsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <ClientsContext.Provider value={{ users, setUsers, fetchUserData }}>{children}</ClientsContext.Provider>
  );
};
