import React from 'react';

import { shallow } from 'enzyme';

import Value from './index';

test('Value renders the right text', () => {
  const component = shallow(<Value
    inputValue="show value"
  />);
  expect(component.contains('show value')).toBe(true);
});