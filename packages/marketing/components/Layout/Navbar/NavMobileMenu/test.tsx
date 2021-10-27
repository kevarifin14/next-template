import { act, fireEvent, render } from '@testing-library/react';
import { HiInbox } from 'react-icons/hi';

import NavMobileMenu from '.';

describe('NavMobileMenu', () => {
  const renderNavMobileMenu = (props = {}) => (
    render(
      <NavMobileMenu
        links={[
          {
            title: 'Packages',
            href: '/packages',
            icon: HiInbox,
          },
        ]}
        {...props}
      />,
    )
  );

  it('matches snapshot', () => {
    const { baseElement } = renderNavMobileMenu();
    expect(baseElement).toMatchSnapshot();
  });

  it('opens the menu', () => {
    const { getByRole, getAllByRole, queryByText } = renderNavMobileMenu();

    const openButton = getByRole('button');

    act(() => {
      fireEvent.click(openButton);
    });

    expect(queryByText('Packages')).toBeTruthy();

    const [, closeButton] = getAllByRole('button');

    act(() => {
      fireEvent.click(closeButton);
    });
  });
});
