import { <FTName> } from '.';
import { render } from '@testing-library/react';

describe('<FTName>', () => {
  const render<FTName> = (props = {}) => (
    render(
      <<FTName>
        {...props}
      />
    )
  );

  it('matches snapshot', () => {
    const { baseElement } = render<FTName>();
    expect(baseElement).toMatchSnapshot();
  });
});