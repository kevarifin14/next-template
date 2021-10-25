import { render } from '@testing-library/react';
import React from 'react';

import { MediaObject } from '.';
import * as AvatarSpy from '../Avatar';

describe('MediaObject', () => {
  const mockSrc = 'mockSrc';
  const mockTitle = 'mockTitle';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    const { baseElement } = render(<MediaObject src={mockSrc} title={mockTitle} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('renders Avatar', () => {
    const avatarSpy = jest.spyOn(AvatarSpy, 'Avatar');
    render(<MediaObject src={mockSrc} title={mockTitle} size="2xl" />);
    expect(avatarSpy).toHaveBeenCalled();
  });
});
