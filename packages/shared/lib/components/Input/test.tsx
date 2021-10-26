import { render } from '@testing-library/react';
import React from 'react';

import { Input } from '.';
import { errorTypeToMessage } from '../../utils/forms';

describe('Input', () => {
  const mockLabel = 'mockLabel';

  it('matches snapshot', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement).toMatchSnapshot();
  });

  describe('Input Size', () => {
    it('renders lg input', () => {
      const { getByRole } = render(<Input size="lg" />);
      expect(getByRole('textbox')).toHaveClass('px-5 py-3 text-lg');
    });

    it('renders xl input', () => {
      const { getByRole } = render(<Input size="xl" />);
      expect(getByRole('textbox')).toHaveClass('px-6 py-4 text-xl');
    });
  });

  it('shows message on error', () => {
    const { queryByText } = render(<Input error={{ type: 'required' }} />);

    expect(queryByText(errorTypeToMessage('required'))).toBeTruthy();
  });

  it('shows default error message', () => {
    const { queryByText } = render(<Input error={{ type: 'no type' }} />);

    expect(queryByText(errorTypeToMessage('no type'))).toBeTruthy();
  });

  it('shows custom error message', () => {
    const mockCustomError = 'Wrong';
    const { queryByText } = render(
      <Input label={mockLabel} error={{ message: mockCustomError }} />,
    );

    expect(queryByText(mockCustomError)).toBeTruthy();
  });

  it('renders label', () => {
    const { getByLabelText } = render(<Input label={mockLabel} />);
    expect(getByLabelText).toBeTruthy();
  });
});
