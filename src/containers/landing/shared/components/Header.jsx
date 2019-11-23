import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { NavLink } from 'react-router-dom';

import Button from 'shared/components/UI/Button';
import HeaderButtons from './HeaderButtons';

const propTypes = {
  items: PropTypes.array,
};

function Header({ items }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const className = cls(toggleMenu && 'open');
  const listenToScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  });

  if (typeof window !== 'undefined') {
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <header className={cls('landing-navbar', scrollPosition > 0 && 'landing-navbar-shadow')}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-12">
            <div className="landing-navbar-items">
              <div className="landing-navbar-logo">Caves.app</div>
              <div className="landing-navbar-menu">
                <ul>
                  {items.map(item => (
                    <li key={item.title}>
                      <NavLink to={item.link}>{item.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <HeaderButtons scrollPosition={scrollPosition} />
              <div className={`toggle ${className}`} onClick={() => setToggleMenu(!toggleMenu)}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`toggle-menu ${className}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul>
                {items.map(item => (
                  <li key={item.title}>
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </li>
                ))}
                <li>
                  <Button href="/login" variant="primary" block>
                    Giriş Yap
                  </Button>
                </li>
                <li>
                  <Button href="/login" variant="primary" block>
                    Kayıt Ol
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;

export default Header;
