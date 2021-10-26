import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { AppearanceProvider, useAppearanceContext } from '.';

describe('Apprearance Context', () => {
  const AppearanceConsumer = () => {
    const { dark, setDark } = useAppearanceContext();
    return (
      <>
        <button onClick={() => setDark((prev) => !prev)}>Toggle Dark Mode</button>
        {dark ? 'dark' : 'light'}
      </>
    );
  };

  const wrapper = ({ children }) => <AppearanceProvider dark>{children}</AppearanceProvider>;

  it('matches snapshot', () => {
    const { baseElement } = render(<AppearanceConsumer />, { wrapper });
    expect(baseElement).toMatchSnapshot();
  });

  it('toggles dark mode', () => {
    const { getByRole, queryByText } = render(<AppearanceConsumer />, { wrapper });

    const toggleDarkModeButton = getByRole('button');

    expect(queryByText('dark')).toBeTruthy();

    fireEvent.click(toggleDarkModeButton);

    expect(queryByText('light')).toBeTruthy();
  });
});
