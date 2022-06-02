import Cookies from 'js-cookie';
import { useCallback, useEffect, useState } from 'react';

import API from '../api/requests';
import { TUseLoginReturn, TUserDetails } from '../types/global';

const useLogin = (): TUseLoginReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState({ status: '', text: '' });
  const [userDetails, setUserDetails] = useState<TUserDetails>({
    username: '',
    firstName: '',
    lastName: '',
  });

  const handleLogIn = useCallback(
    async (username: string, password: string) => {
      setLoading(true);
      await API.logIn(username, password)
        .then((response: { data: { message: string; token: string } }) => {
          Cookies.set('token', response.data.token, { expires: 2 });
          setIsAuthenticated(true);
        })
        .catch((error: { response: { data: string } }) => {
          setMessage({ status: 'error', text: error.response.data });
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [],
  );

  const handleLogOut = useCallback(async () => {
    await Cookies.remove('token');
    setIsAuthenticated(false);
  }, []);

  const getUserDetails = useCallback(async (token: string) => {
    await API.getUserDetails(token)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setMessage({ status: '', text: '' });
    }, 2500);

    return () => {
      clearTimeout(messageTimer);
    };
  }, [message]);

  return {
    isLoading,
    message,
    isAuthenticated,
    userDetails,
    setLoading,
    handleLogIn,
    handleLogOut,
    setIsAuthenticated,
    getUserDetails,
  };
};

export default useLogin;
