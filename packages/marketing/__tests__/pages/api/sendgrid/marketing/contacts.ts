import { NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';

import { mockRequest, mockResponse } from '__mocks__/@sendgrid/client';
import { mockEmail } from '__mocks__/utils';
import { SendgridApiRequest } from 'middleware/sendgrid';
import sendgridMarketingContactsHandler from 'pages/api/sendgrid/marketing/contacts';

describe('/api/sendgrid/marketing/contacts handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sends marketing contact to sendgrid', async () => {
    const { req, res } = createMocks<SendgridApiRequest, NextApiResponse>({
      method: 'POST',
      url: '/api/sendgrid/marketing/contacts',
      body: { email: mockEmail },
    });

    await sendgridMarketingContactsHandler.run(req, res);

    expect(res.statusCode).toBe(200);

    expect(JSON.parse(res._getData())).toEqual(mockResponse);

    expect(mockRequest).toHaveBeenCalledWith({
      url: '/v3/marketing/contacts',
      method: 'PUT',
      body: { contacts: [{ email: req.body.email }] },
    });
  });

  it('returns 400 on error', async () => {
    mockRequest.mockImplementation(() => { throw Error(); });
    const { req, res } = createMocks<SendgridApiRequest, NextApiResponse>({
      method: 'POST',
      url: '/api/sendgrid/marketing/contacts',
      body: { email: mockEmail },
    });

    await sendgridMarketingContactsHandler.run(req, res);

    expect(res.statusCode).toBe(400);
  });
});
