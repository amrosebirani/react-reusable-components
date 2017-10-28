import React from 'react';
import styles from './styles';

const Value = ({ inputValue }) => (
  <div>
    <style jsx>{styles}</style>
    <div className="valueText">{ inputValue }</div>
  </div>
);

export default Value;
