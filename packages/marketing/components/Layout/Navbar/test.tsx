import { act, render, fireEvent } from '@testing-library/react';

import { appearanceProviderWrapper } from '__mocks__/utils/wrappers';

import Navbar from '.';

describe('Navbar', () => {
  const renderNavbar = (props = {}) => (
    render(
      <Navbar {...props} />,
      { wrapper: appearanceProviderWrapper },
    )
  );

  it('matches snapshot', () => {
    const { baseElement } = renderNavbar();
    expect(baseElement).toMatchSnapshot();
  });

  it('toggles dark mode', () => {
    const { getAllByRole, container } = renderNavbar();
    const [darkButton] = getAllByRole('button');

    act(() => {
      fireEvent.click(darkButton);
    });

    expect(container.firstChild).toHaveClass('dark');
  });
});
