import { render } from '@testing-library/react';
import React from 'react';

import { Card } from '.';

describe('Card', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Card>this is a card</Card>);
    expect(baseElement).toMatchSnapshot();
  });

  it('creates a default sized button', () => {
    const { container } = render(<Card type="primary">this is a primary card</Card>);
    expect(container.firstChild).toHaveClass('bg-primary-dark');
  });
});
