import { render } from '@testing-library/react';

import FeatureSideBySideSection from '.';

describe('FeatureSideBySideSection', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<FeatureSideBySideSection />);
    expect(baseElement).toMatchSnapshot();
  });
});
