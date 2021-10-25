import { pageview, event } from '.';

describe('Google Analytics', () => {
  const mockGtag = jest.fn();
  window.gtag = mockGtag;

  const mockUrl = 'https://mock.com';
  const mockAction = 'login';
  const mockParams = { email: 'mock@gmail.com' };

  describe('pageview', () => {
    it('triggers gtag config', () => {
      pageview(mockUrl);

      expect(mockGtag).toHaveBeenCalledWith(
        'config',
        'TEST_GOOGLE_ANALYTICS_TRACKING_ID',
        { page_path: mockUrl },
      );
    });
  });

  describe('event', () => {
    it('triggers gtag event', () => {
      event({ action: mockAction, params: mockParams });

      expect(mockGtag).toHaveBeenCalledWith(
        'event',
        mockAction,
        mockParams,
      );
    });
  });
});
