import { NextApiResponse } from 'next';
import nextConnect from 'next-connect';

import { SendgridApiRequest, sendgridMiddleware } from 'middleware/sendgrid';

const handler = nextConnect<SendgridApiRequest, NextApiResponse>();

handler.use(sendgridMiddleware);

handler.post(async (req, res, next) => {
  const { sendgrid } = req;

  try {
    const response = await sendgrid.request({
      url: '/v3/marketing/contacts',
      method: 'PUT',
      body: { contacts: [{ email: req.body.email }] },
    });

    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }

  return next();
});
