import React from 'react';
import { withState, pure, compose, withHandlers } from 'recompose';
import styles from './styles';

import EditButton from './Pure/EditButton/index';
import Title from './Pure/Title/index';
import InputField from './Pure/InputField/index';
import SetValueButton from './Pure/SetValueButton/index';
import Value from './Pure/Value/index';


const valueState = withState('fieldValue', 'setFieldValue', ({ initialFieldValue }) => {
  return initialFieldValue;
});

const editModeState = withState('editMode', 'setEditMode', false);

const handlers = withHandlers(
  {
    setValueClick: props => () => {
      props.setEditMode(true);
    },
    submitHandler: props => (e) => {
      e.preventDefault();
      props.setEditMode(false);
    },
    editClick: props => () => {
      props.setEditMode(true);
    },
    inputChangeHandler: props => (e) => {
      props.setFieldValue(e.target.value);
    },
  },
);

const StandardInputPure = ({
  fieldName,
  editMode,
  fieldValue,
  placeholderText,
  inputChangeHandler,
  submitHandler,
  setValueClick,
  editClick,
}) => (
  <div>
    <Title titleText={fieldName} />
    {
      editMode === true ? <InputField
        value={fieldValue}
        placeholderText={placeholderText}
        changeHandler={inputChangeHandler}
        submitHandler={submitHandler}
      /> : ''
    }
    {
      editMode === false && fieldValue === '' ? <SetValueButton clickHandler={setValueClick} /> : ''
    }
    {
      editMode === false && fieldValue !== '' ? <div>
        <Value inputValue={fieldValue} />
        <EditButton clickHandler={editClick} />
      </div> : ''
    }
  </div>
);

const StandardInput = compose(
  valueState,
  editModeState,
  handlers,
  pure,
)(StandardInputPure);

export default StandardInput;
