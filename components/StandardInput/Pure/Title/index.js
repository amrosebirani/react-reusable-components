import React from 'react';
import styles from './styles';

const Title = ({ titleText }) => (
  <div>
    <style jsx>{styles}</style>
    <p>{ titleText }</p>
  </div>
);

export default Title;
