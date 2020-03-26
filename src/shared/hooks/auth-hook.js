import { useState, useEffect, useCallback } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setLoggedIn(false);
    window.sessionStorage.clear();
  }, []);

  useEffect(() => {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${process.env.REACT_APP_apiKey}:[DEFAULT]`
    );

    if (user) {
      login();
    }
  }, [login]);

  return { isLoggedIn, login, logout };
};
