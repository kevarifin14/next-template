import { render } from '@testing-library/react';

import SubscribeForm from '.';

describe('SubscribeForm', () => {
  it('matches snapshot', () => {
    const { baseElement } = render(<SubscribeForm />);
    expect(baseElement).toMatchSnapshot();
  });
});
