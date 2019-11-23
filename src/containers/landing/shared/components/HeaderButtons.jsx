import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

// import Register from 'client/components/Register';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

function HeaderButtons(props) {
  const { location } = props;
  const { pathname } = location;

  return (
    <div className="landing-navbar-buttons">
      {pathname === '/login' ? (
        <Link to="/register">Üye Ol</Link>
      ) : (
        <Link to="/login">Giriş Yap</Link>
      )}
      {/* {pathname === '/' && (
				// <div className={cls('register', scrollPosition >= 277 && 'show')}>
				// 	<Register label="" showRecaptcha={false} buttonSize="sm" />
				// </div>
			)} */}
    </div>
  );
}

HeaderButtons.propTypes = propTypes;

export default withRouter(HeaderButtons);
