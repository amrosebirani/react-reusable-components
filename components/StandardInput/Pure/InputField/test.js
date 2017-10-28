import React from 'react';

import { mount } from 'enzyme';

import InputField from './index';

test('input change calls the change handler', () => {
  const onChangeFunc = jest.fn();
  const onSubmitFunc = jest.fn();
  const component = mount(<InputField
    changeHandler={onChangeFunc}
    submitHandler={onSubmitFunc}
    placeholderText="placeholder"
    value="value"
  />);
  component.find('input').simulate('change', { target: { value: 'My new value' } });
  expect(onChangeFunc).toBeCalled();
});
