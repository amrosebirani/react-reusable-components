import React from 'react';
import styles from './styles';

const InputField = ({ submitHandler, changeHandler, placeholderText, value }) => (
  <div>
    <style jsx>{styles}</style>
    <form className="row" onSubmit={submitHandler}>
      <input onChange={changeHandler} type="text" placeholder={placeholderText} value={value} />
    </form>
  </div>
);

export default InputField;
