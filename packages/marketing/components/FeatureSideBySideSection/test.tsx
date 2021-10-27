import { render } from '@testing-library/react';

import {
  mockDescription, mockFeatures, mockSrc, mockTitle,
} from '__mocks__/utils';

import FeatureSideBySideSection from '.';

describe('FeatureSideBySideSection', () => {
  const renderFeatureSideBySideSection = (props = {}) => (
    render(
      <FeatureSideBySideSection
        title={mockTitle}
        description={mockDescription}
        features={mockFeatures}
        src={mockSrc}
        {...props}
      />,
    )
  );

  it('matches snapshot', () => {
    const { baseElement } = renderFeatureSideBySideSection();
    expect(baseElement).toMatchSnapshot();
  });

  it('reverses', () => {
    const { container } = renderFeatureSideBySideSection({ reverse: true });

    expect(container.firstChild.firstChild).toHaveClass('col-start-2');
    expect(container.firstChild.lastChild).toHaveClass('col-start-1 row-start-1');
  });
});
