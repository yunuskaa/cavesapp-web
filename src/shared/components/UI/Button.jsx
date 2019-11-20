import React from 'react';
import { Link } from 'react-router-dom';
import cls from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  block: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
};
const defaultProps = {
  variant: 'primary',
  size: 'md',
  active: false,
  disabled: false,
  type: 'button',
};

function Button({
  disabled,
  variant,
  size,
  active,
  className,
  block,
  type,
  href,
  children,
  loading,
  ...props
}) {
  const prefix = 'btn';
  const classes = cls(
    className,
    prefix,
    `${prefix}-${variant}`,
    active && 'active',
    block && `${prefix}-block`,
    size && `${prefix}-${size}`,
    loading && `${prefix}-loading`,
  );

  if (href) {
    return (
      <Link to={href} className={cls(classes, disabled && 'disabled')} {...props}>
        {loading && (
          <div className="loading">
            <svg className="spinner" viewBox="0 0 50 50">
              <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
            </svg>
          </div>
        )}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {loading && (
        <div className="loading">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
          </svg>
        </div>
      )}
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
