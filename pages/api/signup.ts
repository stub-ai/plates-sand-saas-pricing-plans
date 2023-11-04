import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  plan: string,
  users: number,
  isAnnual: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { plan, users, isAnnual } = req.body;

  // Here you would store the data in your database
  console.log(`Plan: ${plan}, Users: ${users}, Is Annual: ${isAnnual}`);

  res.status(200).json({ plan, users, isAnnual });
}