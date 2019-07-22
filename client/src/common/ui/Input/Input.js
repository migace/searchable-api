import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ icon, value = '', type = 'text', placeholder, onChange = () => {} }) => (
  <div className="field">
    <p className={`control is-expanded ${icon ? 'has-icons-left' : ''}`}>
      <input 
        className="input"
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      {icon && (
        <span className="icon is-small is-left">
            <i className={`fas fa-${icon}`} />
        </span>
      )}
    </p>
  </div>
);

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  icon: PropTypes.string,  
  type: PropTypes.oneOf([ 'text', 'number' ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
