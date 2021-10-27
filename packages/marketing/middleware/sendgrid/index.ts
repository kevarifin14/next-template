import { Client as SendgridClient } from '@sendgrid/client';
import { NextApiRequest } from 'next';

export interface SendgridApiRequest extends NextApiRequest{
  sendgrid: SendgridClient,
}

const sendgridClient = new SendgridClient();

export const sendgridMiddleware = async (req, res, next) => {
  try {
    req.sendgrid = sendgridClient;
    sendgridClient.setApiKey(process.env.SENDGRID_API_KEY);
    return next();
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};
