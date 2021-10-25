import '@testing-library/jest-dom/extend-expect';

// https://stackoverflow.com/questions/44249985/js-testing-code-that-uses-an-intersectionobserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};