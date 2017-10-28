import React from 'react';

import { shallow } from 'enzyme';

import TestButton from './index';

test('edit button calls the click handler', () => {
  const onClickFunc = jest.fn();
  const component = shallow(<TestButton
    clickHandler={onClickFunc}
  />);
  component.find('button').simulate('click');
  expect(onClickFunc).toBeCalled();
});
