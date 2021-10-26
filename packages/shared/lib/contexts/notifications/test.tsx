import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';

import { NotificationsProvider, useNotifications } from '.';

const mockId = '1234';
const mockTitle = 'mockTitle';
const mockDescription = 'mockDescription';

const mockNotification = {
  id: mockId,
  title: mockTitle,
  description: mockDescription,
};

const mockAddNotificationButtonText = 'mockAddNotificationButtonText';
const mockAddSuccessNotificationButtonText = 'mockAddSuccessNotificationButtonText';
const mockAddErrorNotificationButtonText = 'mockAddErrorNotificationButtonText';

const MockNotificationConsumer = () => {
  const {
    addNotification,
    addErrorNotification,
    addSuccessNotification,
  } = useNotifications();

  return (
    <>
      <button onClick={() => addNotification(mockNotification)}>
        {mockAddNotificationButtonText}
      </button>

      <button onClick={() => addSuccessNotification(mockNotification)}>
        {mockAddSuccessNotificationButtonText}
      </button>

      <button onClick={() => addErrorNotification(mockNotification)}>
        {mockAddErrorNotificationButtonText}
      </button>
    </>
  );
};

const MockNotificationProvider = () => (
  <NotificationsProvider>
    <MockNotificationConsumer />
  </NotificationsProvider>
);

describe('NotificationProvider', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<MockNotificationProvider />);
    expect(baseElement).toMatchSnapshot();
  });

  it('adds notification and removes after 4 seconds', () => {
    jest.useFakeTimers();

    const { queryByText } = render(<MockNotificationProvider />);

    const mockAddNotificationButton = queryByText(mockAddNotificationButtonText);

    fireEvent.click(mockAddNotificationButton);

    act(() => {
      jest.advanceTimersByTime(4100);
    });

    expect(queryByText(mockTitle)).toBeNull();
  });

  it('adds success notification', () => {
    const { queryByText, getByRole } = render(<MockNotificationProvider />);

    const mockAddSuccessNotificationButton = queryByText(mockAddSuccessNotificationButtonText);

    fireEvent.click(mockAddSuccessNotificationButton);

    expect(queryByText(mockTitle)).toBeTruthy();

    const mockNotificationCloseButton = getByRole('button', { name: 'Close' });

    fireEvent.click(mockNotificationCloseButton);

    expect(queryByText(mockTitle)).toBeNull();
  });

  it('adds error notification', () => {
    const { queryByText } = render(<MockNotificationProvider />);

    const mockAddErrorNotificationButton = queryByText(mockAddErrorNotificationButtonText);

    fireEvent.click(mockAddErrorNotificationButton);

    expect(queryByText(mockTitle)).toBeTruthy();
  });
});
