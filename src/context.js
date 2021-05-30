/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import AddProductPageForm from 'src/components/AddProductPageForm';
import AddProductLinkForm from 'src/components/AddProductLinkForm';

const AppContext = React.createContext(null);

function AppContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [baseUrl, setBaseUrl] = useState('http://localhost:3000');
  const [openModal, setOpenModal] = useState(false);
  const [ChildComponent, setChildComponent] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);

  useEffect(() => {
    if (!userToken) {
      const token = window.localStorage.getItem('userToken');
      setUserToken(token);
    }
  }, [userToken]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddProductLink = () => {
    setOpenModal(true);
    setChildComponent(<AddProductLinkForm />);
    setModalTitle('Add Product Link');
  };

  const handleProductPageCreate = () => {
    setOpenModal(true);
    setChildComponent(<AddProductPageForm />);
    setModalTitle('Create Product Page');
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        baseUrl,
        userToken,
        setUserToken,
        openModal,
        setOpenModal,
        handleCloseModal,
        ChildComponent,
        handleAddProductLink,
        handleProductPageCreate,
        modalTitle
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
