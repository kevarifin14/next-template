import {
  get, post, generateQueryString, generateEndpoint,
} from '.';

const mockBody = { test: 'body' };
const mockEndpoint = '/api/test';
const mockJsonFn = jest.fn();
const mockResponse: Partial<Response> = {
  status: 200,
  json: mockJsonFn,
};
const mockErrorResponse: Partial<Response> = {
  status: 400,
  json: mockJsonFn,
};
const mockFetch = jest.fn(
  () => new Promise<Response>((resolve) => resolve(mockResponse as Response)),
);
const mockFetchError = jest.fn(
  () => new Promise<Response>((resolve) => resolve(mockErrorResponse as Response)),
);

describe('http', () => {
  beforeAll(() => {
    global.fetch = mockFetch;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('generateQueryString', () => {
    expect(generateQueryString({ test: [1, 2, 3] })).toBe('test=1&test=2&test=3');
  });

  describe('generateEndpoint', () => {
    expect(generateEndpoint(mockEndpoint, { test: [1, 2, 3] }))
      .toBe(`${mockEndpoint}?test=1&test=2&test=3`);
  });

  describe('get', () => {
    it('makes a GET request to the endpoint', async () => {
      await get(mockEndpoint);

      expect(fetch).toHaveBeenCalledWith(mockEndpoint);
      expect(mockJsonFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('post', () => {
    it('makes a POST request with body to the endpoint', async () => {
      await post(mockEndpoint, mockBody);

      expect(fetch).toHaveBeenCalledWith(
        mockEndpoint,
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify(mockBody),
        },
      );
      expect(mockJsonFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('bad requests', () => {
    beforeAll(() => {
      global.fetch = mockFetchError;
    });

    it('throws error on bad GET request', async () => {
      expect(() => get(mockEndpoint)).rejects.toThrowError();
    });

    it('throws error on bad POST request', async () => {
      expect(() => post(mockEndpoint, {})).rejects.toThrowError();
    });
  });
});
