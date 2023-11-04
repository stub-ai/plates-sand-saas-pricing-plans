import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  email: string,
  date: string,
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, date, message } = req.body;

  // Here you would store the data in your database
  console.log(`Name: ${name}, Email: ${email}, Date: ${date}, Message: ${message}`);

  res.status(200).json({ name, email, date, message });
}