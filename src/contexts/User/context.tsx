import Cookies from 'js-cookie';
import { createContext, useContext, useEffect } from 'react';
import { initialContext } from '../../constans/initial';
import useLogin from '../../hooks/useLogin';
import { TUserContextProps, TUserProviderProps } from '../../types/global';

export const UserContext = createContext<TUserContextProps>(initialContext);

export const UserProvider = ({ children }: TUserProviderProps) => {
  const {
    isLoading,
    setLoading,
    message,
    handleLogIn,
    handleLogOut,
    isAuthenticated,
    setIsAuthenticated,
    userDetails,
    getUserDetails,
  } = useLogin();

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      setIsAuthenticated(true);
      getUserDetails(token);
    }
  }, [getUserDetails, isAuthenticated, setIsAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userDetails,
        isLoading,
        setLoading,
        message,
        handleLogIn,
        handleLogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): TUserContextProps => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error('useUserContext must be used within a UserContextProvider');

  return context;
};
