import { render } from '@testing-library/react';

import { notificationsProviderWrapper } from '__mocks__/utils/wrappers';

import { IndexPage } from '.';

describe('IndexPage', () => {
  const renderIndexPage = (props = {}) => (
    render(
      <IndexPage
        {...props}
      />,
      { wrapper: notificationsProviderWrapper },
    )
  );

  it('matches snapshot', () => {
    const { baseElement } = renderIndexPage();
    expect(baseElement).toMatchSnapshot();
  });
});
