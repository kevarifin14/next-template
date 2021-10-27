import { render } from '@testing-library/react';

import { mockDescription, mockTitle } from '__mocks__/utils';
import { notificationsProviderWrapper } from '__mocks__/utils/wrappers';

import { HeroSection } from '.';

describe('HeroSection', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <HeroSection title={mockTitle} description={mockDescription} withSubscribeForm />,
      { wrapper: notificationsProviderWrapper },
    );
    expect(baseElement).toMatchSnapshot();
  });
});
