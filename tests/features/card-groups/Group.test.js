import React from 'react';
import { shallow } from 'enzyme';
import { Group } from '../../../src/features/card-groups/Group';

describe('card-groups/Group', () => {
  it('renders node with correct class name', () => {
    const props = {
      cardGroups: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Group {...props} />
    );

    expect(
      renderedComponent.find('.card-groups-group').length
    ).toBe(1);
  });
});
