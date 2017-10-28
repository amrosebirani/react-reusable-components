import React from 'react';
import styles from './styles';

const EditButton = ({ clickHandler }) => (
  <div>
    <style jsx>{styles}</style>
    <button onClick={() => clickHandler()} ><span className="icon-pencil" /></button>
  </div>
);

export default EditButton;
