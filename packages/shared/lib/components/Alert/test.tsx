import { render, screen } from '@testing-library/react';
import React from 'react';

import { Alert } from '.';

describe('Alert', () => {
  const mockTitle = 'mockTitle';
  const mockDescription = 'mockDescription';

  it('matches snapshot', () => {
    const { baseElement } = render(<Alert title={mockTitle} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('shows description', () => {
    render(<Alert title={mockTitle} description={mockDescription} />);
    const description = screen.getByText(mockDescription);
    expect(description).toContainHTML(mockDescription);
  });
});
