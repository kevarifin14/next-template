import { Client as SendgridClient } from '@sendgrid/client';
import { NextApiRequest } from 'next';

export interface SendgridApiRequest extends NextApiRequest{
  sendgrid: SendgridClient,
}

const sendgridClient = new SendgridClient();
sendgridClient.setApiKey(process.env.SENDGRID_API_KEY);

export const sendgridMiddleware = async (req, res, next) => {
  try {
    req.sendgrid = sendgridClient;
    return next();
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};
