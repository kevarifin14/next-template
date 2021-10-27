import { createMocks } from 'node-mocks-http';

import { mockClient, mockSetApiKey } from '__mocks__/@sendgrid/client';

import { sendgridMiddleware } from '.';

describe('sendgridMiddleware', () => {
  let mocks;
  const mockNextFn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mocks = createMocks();
  });

  it('adds Sendgrid client to the req', () => {
    const { req } = mocks;

    sendgridMiddleware(mocks.req, mocks.res, mockNextFn);

    expect(mockSetApiKey).toHaveBeenCalledWith('TEST_SENDGRID_API_KEY');

    expect(req.sendgrid).toBe(mockClient);
    expect(mockNextFn).toHaveBeenCalled();
  });

  it('errors', () => {
    mockSetApiKey.mockImplementationOnce(() => { throw Error('There was a problem'); });

    sendgridMiddleware(mocks.req, mocks.res, mockNextFn);

    const { res } = mocks;

    expect(res.statusCode).toBe(404);
  });
});
