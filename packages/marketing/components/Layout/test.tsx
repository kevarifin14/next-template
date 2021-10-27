import { render } from '@testing-library/react';

import { appearanceProviderWrapper } from '__mocks__/utils/wrappers';

import { getLayout, Layout } from '.';

describe('Layout', () => {
  const renderLayout = (props = {}) => (
    render(
      <Layout
        {...props}
      >
        hi
      </Layout>,
      { wrapper: appearanceProviderWrapper },
    )
  );

  it('matches snapshot', () => {
    const { baseElement } = renderLayout();
    expect(baseElement).toMatchSnapshot();
  });

  it('getLayout', () => {
    const { baseElement } = render(getLayout('test'));
    expect(baseElement).toMatchSnapshot();
  });
});
