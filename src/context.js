/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const AppContext = React.createContext(null);

function AppContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(null)
  const [baseUrl, setBaseUrl] = useState("http://localhost:3000")



  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        baseUrl,
        userToken, 
        setUserToken
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
