import { render } from '@testing-library/react';
import React from 'react';

import { Card } from '.';

describe('Card', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Card>this is a card</Card>);
    expect(baseElement).toMatchSnapshot();
  });
});
