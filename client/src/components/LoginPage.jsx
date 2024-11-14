import React, { useState } from 'react';
import styles from '../styles/Sign.module.css';
import { Link } from 'react-router-dom';

export default function LoginPage({ handleLogin }) {
  const [user, setUser] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <form onSubmit={handleLogin}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>Войти</h1>
          <input
            type="email"
            name="email"
            placeholder="Электронная почта"
            className={styles.input}
            onChange={changeHandler}
          />
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Пароль"
              className={styles.input}
              onChange={changeHandler}
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </span>
          </div>
          <Link to="#" className={styles.forgotPassword}>
            Забыли пароль?
          </Link>
          <button type="submit" className={styles.button}>
            Войти
          </button>

          <div className={styles.toggleContainer}>
            <p>Нет аккаунта?</p>
            <Link to="/signup" className={styles.toggleButton}>
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
