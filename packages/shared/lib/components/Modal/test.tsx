import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { Modal } from '.';

describe('Modal', () => {
  const mockChildren = 'mockChildren';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    const { baseElement } = render(<Modal open>{mockChildren}</Modal>);
    expect(baseElement).toMatchSnapshot();
  });

  it('renders Modal with content', () => {
    const { getByText } = render(<Modal open>{mockChildren}</Modal>);
    expect(getByText(mockChildren)).toContainHTML(mockChildren);
  });

  it('renders does not render content when closed', () => {
    const { queryByText } = render(<Modal open={false}>{mockChildren}</Modal>);
    expect(queryByText(mockChildren)).toBeNull();
  });

  it('fires onClose function', () => {
    const mockOnClose = jest.fn();
    const { getByRole } = render(<Modal open onClose={mockOnClose}>{mockChildren}</Modal>);

    const closeXIcon = getByRole('button');
    fireEvent.click(closeXIcon);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('works without an onClose function', () => {
    const { getByRole } = render(<Modal open>{mockChildren}</Modal>);

    const closeXIcon = getByRole('button');
    fireEvent.click(closeXIcon);
  });

  it('hides close button when not closable', () => {
    const { queryByRole } = render(<Modal open closable={false}>{mockChildren}</Modal>);
    expect(queryByRole('button')).toBeNull();
  });
});
