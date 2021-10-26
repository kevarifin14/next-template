import { render } from '@testing-library/react';
import React from 'react';

import { TextArea } from '.';
import { errorTypeToMessage } from '../../utils/forms';

describe('TextArea', () => {
  const mockLabel = 'mockLabel';

  it('matches snapshot', () => {
    const { baseElement } = render(<TextArea />);
    expect(baseElement).toMatchSnapshot();
  });

  it('shows message on error', () => {
    const { queryByText } = render(<TextArea error={{ type: 'required' }} />);

    expect(queryByText(errorTypeToMessage('required'))).toBeTruthy();
  });

  it('shows default error message', () => {
    const { queryByText } = render(<TextArea error={{ type: 'no type' }} />);

    expect(queryByText(errorTypeToMessage('no type'))).toBeTruthy();
  });

  it('shows custom error message', () => {
    const mockCustomError = 'Wrong';
    const { queryByText } = render(
      <TextArea label={mockLabel} error={{ message: mockCustomError }} />,
    );

    expect(queryByText(mockCustomError)).toBeTruthy();
  });

  it('renders label', () => {
    const { getByLabelText } = render(<TextArea label={mockLabel} />);
    expect(getByLabelText).toBeTruthy();
  });
});
