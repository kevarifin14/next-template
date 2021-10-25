import { render } from '@testing-library/react';
import React from 'react';

import { Spin } from '.';

describe('Spin', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Spin />);
    expect(baseElement).toMatchSnapshot();
  });
});
