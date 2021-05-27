import React, { useState } from 'react';

const AppContext = React.createContext(null);

function AppContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
