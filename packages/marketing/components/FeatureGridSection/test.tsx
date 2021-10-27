import { render } from '@testing-library/react';

import { mockDescription, mockFeatures, mockTitle } from '__mocks__/utils';

import FeatureGridSection from '.';

describe('FeatureGridSection', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(
      <FeatureGridSection
        title={mockTitle}
        description={mockDescription}
        features={mockFeatures}
      />,
    );
    expect(baseElement).toMatchSnapshot();
  });
});
