import { render } from '@testing-library/react';

import { mockDescription, mockTitle } from '__mocks__/utils';

import { Header } from '.';

describe('Header', () => {
  const renderHeader = (props = {}) => (
    render(
      <Header
        title={mockTitle}
        description={mockDescription}
        {...props}
      />,
    )
  );

  it('matches snapshot', () => {
    const { baseElement } = renderHeader();
    expect(baseElement).toMatchSnapshot();
  });
});
