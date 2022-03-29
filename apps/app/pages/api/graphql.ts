import { post } from "@next-template/shared";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.post(async (req, res, next) => {
  const response = await post(process.env.HASURA_ENDPOINT, req.body, {
    "x-hasura-role": "public",
  });

  res.status(200).json(response);

  return next;
});

export default handler;
