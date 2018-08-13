import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/card-groups/DefaultPage';

describe('card-groups/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      cardGroups: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.card-groups-default-page').length
    ).toBe(1);
  });
});
