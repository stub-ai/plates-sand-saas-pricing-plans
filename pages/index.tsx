import Image from 'next/image'
import { Inter } from 'next/font/google'
import PricingCard from '../components/PricingCard'

const inter = Inter({ subsets: ['latin'] })

const plans = [
  {
    name: 'Basic',
    features: ['1 GB Storage', '10 GB Bandwidth', '24/7 Support'],
    price: '$10/month'
  },
  {
    name: 'Premium',
    features: ['10 GB Storage', '100 GB Bandwidth', '24/7 Support'],
    price: '$20/month'
  },
  {
    name: 'Ultimate',
    features: ['Unlimited Storage', 'Unlimited Bandwidth', '24/7 Support'],
    price: '$30/month'
  }
]

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold mb-10">Our Plans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </main>
  )
}