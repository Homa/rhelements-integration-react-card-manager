import React from 'react';
import { shallow } from 'enzyme';
import { AddCard } from '../../../src/features/card-groups';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AddCard />);
  expect(renderedComponent.find('.card-groups-add-card').length).toBe(1);
});
