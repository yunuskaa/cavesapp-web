import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  message: PropTypes.string,
  id: PropTypes.string,
  hasError: PropTypes.bool,
  label: PropTypes.string,
};
const defaultProps = {
  hasError: false,
};

function Input({ className, children, message, id, hasError, label, ...props }) {
  const prefix = 'form';
  const classes = cls(className, `${prefix}-group`, hasError && 'has-danger');

  return (
    <div className={classes}>
      {label && <label htmlFor={id}>{label}</label>}

      <textarea className="form-control" id={id} {...props}>
        {children}
      </textarea>
      <small>{message}</small>
    </div>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
