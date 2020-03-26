import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';

import styles from './Header.module.css';

const Header = props => {
  const auth = useContext(AuthContext);

  const handleLogin = () => {
    auth.logout();
  };

  return (
    <header className={styles['header']}>
      <Link to="/">Main</Link>
      {props.isLoggedIn ? (
        <button onClick={() => handleLogin()}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </header>
  );
};

export default Header;
