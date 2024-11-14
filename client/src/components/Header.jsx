import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

function Header({ user, handleLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await handleLogout();
    navigate('/');
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Логотип" className="logo" />
      </Link>
      <nav className="nav">
        <Link className="nav-link disabled" to="/">
          {user ? `Привет, ${user.name}` : 'Привет, гость!'}
        </Link>
        <Link to="#">Попутчики</Link>
        <Link to="/plan">План</Link>
        {user ? (
          <Link onClick={handleLogoutClick} type="button" className="nav-link">
            Выйти
          </Link>
        ) : (
          <>
            <Link to="/login">Вход</Link>
            <Link to="/signup">Регистрация</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
