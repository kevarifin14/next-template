import { render } from '@testing-library/react';

import FeatureGridSection from '.';

describe('FeatureGridSection', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<FeatureGridSection />);
    expect(baseElement).toMatchSnapshot();
  });
});
