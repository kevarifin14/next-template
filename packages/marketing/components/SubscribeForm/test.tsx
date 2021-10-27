import { render, fireEvent, act } from '@testing-library/react';

import { mockPost } from '__mocks__/shared';
import { mockEmail } from '__mocks__/utils';
import { notificationsProviderWrapper } from '__mocks__/utils/wrappers';

import SubscribeForm from '.';

describe('SubscribeForm', () => {
  const renderSubscribeForm = (props = {}) => (
    render(
      <SubscribeForm {...props} />,
      { wrapper: notificationsProviderWrapper },
    )
  );

  it('matches snapshot', () => {
    const { baseElement } = renderSubscribeForm();
    expect(baseElement).toMatchSnapshot();
  });

  it('fills out and sends form', async () => {
    const { getByPlaceholderText, getByRole } = renderSubscribeForm();

    const emailInput = getByPlaceholderText('Enter Your Email');
    const submitButton = getByRole('button');

    fireEvent.change(emailInput, { target: { value: mockEmail } });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(mockPost).toHaveBeenCalledWith('/api/sendgrid/marketing/contacts', { email: mockEmail });
  });

  it('shows error notification on error', async () => {
    mockPost.mockImplementationOnce(() => { throw Error(); });

    const { getByPlaceholderText, getByRole, queryByText } = renderSubscribeForm();

    const emailInput = getByPlaceholderText('Enter Your Email');
    const submitButton = getByRole('button');

    fireEvent.change(emailInput, { target: { value: mockEmail } });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(queryByText('There was a problem')).toBeTruthy();
  });
});
