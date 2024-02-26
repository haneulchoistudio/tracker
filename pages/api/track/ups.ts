import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  // TRACKING UPS HANDLER
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(400).end();
    return;
  }

  if (!req.body?.tracking) {
    res.status(400).end();
    return;
  }

  res.status(200).json({});
}
