import { render } from '@testing-library/react';

import Section from '.';

describe('Section', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<Section>mock</Section>);
    expect(baseElement).toMatchSnapshot();
  });
});
