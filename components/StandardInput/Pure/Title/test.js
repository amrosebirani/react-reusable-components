import React from 'react';

import { shallow } from 'enzyme';

import Title from './index';

test('title renders the right text', () => {
  const component = shallow(<Title
    titleText="title"
  />);
  expect(component.contains('title')).toBe(true);
});
