import { render } from '@testing-library/react';
import React from 'react';

import { LogoImage } from '.';

describe('LogoImage', () => {
  const renderLogoImage = (props = {}) => (
    render(
      <LogoImage
        {...props}
      />,
    )
  );

  it('matches snapshot', () => {
    const { baseElement } = renderLogoImage();
    expect(baseElement).toMatchSnapshot();
  });
});
