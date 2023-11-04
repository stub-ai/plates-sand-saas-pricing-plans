import React from 'react';

interface Plan {
  name: string;
  features: string[];
  price: string;
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
      <ul className="mb-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <p className="text-xl font-bold mb-4">{plan.price}</p>
      <button className="bg-blue-500 text-white rounded-lg px-6 py-2">Sign Up</button>
    </div>
  );
};

export default PricingCard;