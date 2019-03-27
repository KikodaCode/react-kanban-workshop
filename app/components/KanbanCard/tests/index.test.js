import React from 'react';
import { mount } from 'enzyme';

import Container from 'components/Container';

import KanbanCard, { COLOR_TABLE } from '../index';

describe('<KanbanCard />', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      color: 'red',
      task: {
        id: 1,
        status: 'In Progress',
        description: 'Hello, world!',
      },
    };

    component = mount(<KanbanCard {...props} />);
  });

  it('Expect to have unit tests specified', () => {
    expect(component.find(Container).prop('style')).toHaveProperty(
      'backgroundColor',
      COLOR_TABLE.red,
    );
  });

  it('should contain the description', () => {
    expect(component.text()).toContain('Hello, world!');
  });
});
