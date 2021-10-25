import { render } from '@testing-library/react';
import React from 'react';

import {
  CheckCircleIcon, ExclamationCircleIcon, XCircleIcon, ExternalLinkIcon, PlusIcon, ArrowsExpandIcon,
} from '.';

describe('icons', () => {
  describe('CheckCircleIcon', () => {
    it('matches snapshot', () => {
      const { baseElement } = render(<CheckCircleIcon />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('ExclamationCircleIcon', () => {
    it('matches snapshot', () => {
      const { baseElement } = render(<ExclamationCircleIcon />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('XCircleIcon', () => {
    it('matches snapshot', () => {
      const { baseElement } = render(<XCircleIcon />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('ExternalLinkIcon', () => {
    it('matches snapshot', () => {
      const { baseElement } = render(<ExternalLinkIcon />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('PlusIcon', () => {
    it('matches snapshot', () => {
      const { baseElement } = render(<PlusIcon />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('ArrowsExpandIcon', () => {
    it('matches snapshot', () => {
      const { baseElement } = render(<ArrowsExpandIcon />);
      expect(baseElement).toMatchSnapshot();
    });
  });
});
