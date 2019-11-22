import cls from 'classnames';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.any.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSelectItem: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
};

function Select({ options, onSelectItem, placeholder, label, ...props }) {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [placeholderText, setPlaceholderText] = useState(placeholder);
  const [selected, setSelected] = useState(false);
  const classes = cls('select', toggleSelect && 'open');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', e => {
        const item = e.target.className;

        // TODO Find a better way to do close select.
        if (
          item.indexOf('select-placeholder') === -1 &&
          item.indexOf('select-item') === -1 &&
          item.indexOf('select-label') === -1
        ) {
          setToggleSelect(false);
        }
      });
    }
  });

  const selectItem = (name, title) => {
    setPlaceholderText(title);
    onSelectItem(name);
    setToggleSelect(false);
    setSelected(name);
  };

  return (
    <div className={classes} {...props}>
      <div className="select-label" onClick={() => setToggleSelect(!toggleSelect)}>
        {label}
      </div>
      <span className="select-placeholder" onClick={() => setToggleSelect(!toggleSelect)}>
        {placeholderText}
      </span>
      <ul className="select-items">
        {options.map(({ name, title }) => (
          <li
            className={`select-item ${selected && selected === name ? 'selected' : ''}`}
            key={name}
            onClick={() => selectItem(name, title)}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

Select.propTypes = propTypes;

export default Select;
