import React from 'react';
import styles from './styles';

const SetValueButton = ({ clickHandler }) => (
  <div>
    <style jsx>{styles}</style>
    <button onClick={() => clickHandler()} ><p>Set Value</p></button>
  </div>
);

export default SetValueButton;
