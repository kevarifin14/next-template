import { render } from '@testing-library/react';
import React from 'react';

import { Avatar } from '.';

describe('Avatar', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Avatar src="" />);
    expect(baseElement).toMatchSnapshot();
  });
});
