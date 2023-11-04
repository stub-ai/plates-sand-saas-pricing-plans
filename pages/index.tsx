import { useEffect, useState } from 'react';
import PricingCard from '../components/PricingCard';
import ContactUsForm from '../components/ContactUsForm';

export default function Home() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/api/pricing')
      .then(response => response.json())
      .then(data => setPlans(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-10">Our Plans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
      <ContactUsForm />
    </main>
  )
}