import React from 'react';

export const Field = ({ label, children }) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">{label}</label>
    </div>
    <div className="field-body">
      { children }
    </div>
  </div>
);
