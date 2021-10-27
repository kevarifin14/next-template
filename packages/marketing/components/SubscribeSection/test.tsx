import { render } from '@testing-library/react';

import { notificationsProviderWrapper } from '__mocks__/utils/wrappers';

import SubscribeSection from '.';

describe('SubscribeSection', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<SubscribeSection />, { wrapper: notificationsProviderWrapper });
    expect(baseElement).toMatchSnapshot();
  });
});
