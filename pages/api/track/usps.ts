import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  // TRACKING USPS HANDLER
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

  // https://github.com/USPS/api-examples
  const endPoint = `https//api.usps.com/v3/tracking/${req.body.tracking}?expand=detail`
  const response = await fetch(endPoint)

  console.log(response)

  const payload = await response.json()

  console.log(payload)

  res.status(200).json({});
}
