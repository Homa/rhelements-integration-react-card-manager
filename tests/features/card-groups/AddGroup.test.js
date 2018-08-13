import React from 'react';
import { shallow } from 'enzyme';
import { AddGroup } from '../../../src/features/card-groups';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AddGroup />);
  expect(renderedComponent.find('.card-groups-add-group').length).toBe(1);
});
