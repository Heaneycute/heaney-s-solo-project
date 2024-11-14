import React, { useState } from 'react';
import styles from '../styles/Sign.module.css';
import { Link } from 'react-router-dom';

export default function SignUpPage({ handleSignUp }) {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <form onSubmit={handleSignUp}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>Зарегистрироваться</h1>
          <input
            type="email"
            name="email"
            placeholder="Электронная почта"
            className={styles.input}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="name"
            placeholder="Имя"
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
          <button type="submit" className={styles.button}>
            Зарегистрироваться
          </button>
          <div className={styles.toggleContainer}>
            <p>Уже есть аккаунт?</p>
            <Link to="/login" className={styles.toggleButton}>
              Войти
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
