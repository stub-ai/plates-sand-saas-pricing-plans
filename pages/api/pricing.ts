import type { NextApiRequest, NextApiResponse } from 'next'

type Plan = {
  name: string;
  features: string[];
  price: string;
  annualPrice: string;
}

type Data = Plan[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const plans: Data = [
    {
      name: 'Basic',
      features: ['1 GB Storage', '10 GB Bandwidth', '24/7 Support'],
      price: '$10/month',
      annualPrice: '$100/year'
    },
    {
      name: 'Premium',
      features: ['10 GB Storage', '100 GB Bandwidth', '24/7 Support'],
      price: '$20/month',
      annualPrice: '$200/year'
    },
    {
      name: 'Ultimate',
      features: ['Unlimited Storage', 'Unlimited Bandwidth', '24/7 Support'],
      price: '$30/month',
      annualPrice: '$300/year'
    }
  ]

  res.status(200).json(plans)
}