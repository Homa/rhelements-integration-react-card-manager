import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../../../src/features/card-groups';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Card />);
  expect(renderedComponent.find('.card-groups-card').length).toBe(1);
});
