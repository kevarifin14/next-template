import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from '.';
import { classNames } from '../../utils/tailwind';
import * as SpinComponent from '../Spin';

describe('Button', () => {
  const mockChildren = 'Click';

  const spinSpy = jest.spyOn(SpinComponent, 'Spin');

  const renderButton = (props) => {
    render(<Button {...props}>{mockChildren}</Button>);
    return screen.getByRole('button');
  };

  afterEach(() => jest.clearAllMocks());

  it('matches snapshot', () => {
    const { baseElement } = render(
      <Button type="primary">{mockChildren}</Button>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('renders the child', () => {
    const button = renderButton({});
    expect(button).toContainHTML(mockChildren);
    expect(spinSpy).not.toHaveBeenCalled();
  });

  describe('Button size', () => {
    it('creates a default sized button', () => {
      const button = renderButton({});
      expect(button).toHaveClass('px-4 py-2');
    });

    it('makes the button lg', () => {
      const button = renderButton({ size: 'lg' });
      expect(button).toHaveClass('px-5 py-3 text-lg');
    });

    it('makes the button xl', () => {
      const button = renderButton({ size: 'xl' });
      expect(button).toHaveClass('px-6 py-4 text-xl');
    });
  });

  it('fires onClick function', () => {
    const mockOnClick = jest.fn();
    const button = renderButton({ onClick: mockOnClick });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('makes the button primary', () => {
    const button = renderButton({ type: 'primary' });
    expect(button).toHaveClass('bg-primary');
  });

  it('makes the button primary gradient', () => {
    const button = renderButton({ type: 'primary', gradient: true });
    expect(button).toHaveClass('bg-gradient-to-tr from-primary-500 to-primary-900 text-white');
  });

  it('makes the button secondary', () => {
    const button = renderButton({ type: 'secondary' });
    expect(button).toHaveClass(
      classNames(
        'text-primary-dark bg-primary-100 border-primary-100 hover:bg-primary-200',
        'hover:border-primary-200 border',
        'dark:text-primary dark:bg-transparent dark:border-primary',
      ),
    );
  });

  it('makes the button loading', () => {
    const button = renderButton({ loading: true });

    expect(button).toBeDisabled();
    expect(spinSpy).toHaveBeenCalled();
  });

  it('makes the button disabled', () => {
    const button = renderButton({ disabled: true });

    expect(button).toHaveClass('opacity-50');
    expect(button).toBeDisabled();
    expect(spinSpy).not.toHaveBeenCalled();
  });

  it('makes the button block', () => {
    const button = renderButton({ block: true });

    expect(button).toHaveClass('w-full');
  });
});
