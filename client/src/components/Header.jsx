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
        <Link className='nav-link disabled' to="/">{user ? `Hi, ${user.name}` : 'Guest'}</Link>
        <Link to="/companions">Попутчики</Link>
        <Link to="/plan">План</Link>
        {user ? (
          <button onClick={handleLogoutClick} type="button" className="nav-link">
            Logout
          </button>
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
