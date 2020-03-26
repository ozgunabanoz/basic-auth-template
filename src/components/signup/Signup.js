import React, { useState, useContext } from 'react';
import * as firebase from 'firebase';
import { AuthContext } from '../../shared/context/auth-context';

import styles from './Signup.module.css';

const Signup = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const auth = useContext(AuthContext);

  const handleForm = async e => {
    e.preventDefault();

    try {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION);

      let res = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (res.user) {
        let user = firebase.auth().currentUser;

        if (!user) {
          await user.updateProfile({
            displayName: username
          });
        }

        auth.login();
        props.history.push('/');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles['signup-form']}>
      <form onSubmit={e => handleForm(e)}>
        <input
          type="text"
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          autoComplete="username"
        />
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="email"
        />
        <input
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="password"
        />
        <button type="submit">Submit</button>
      </form>
      <div className={styles['error-span']}>{error}</div>
    </div>
  );
};

export default Signup;
