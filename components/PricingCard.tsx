import React, { useState } from 'react';

interface Plan {
  name: string;
  features: string[];
  price: string;
  annualPrice: string;
}

interface PricingCardProps {
  plan: Plan;
  selectedPlan: string;
  setSelectedPlan: (planName: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, selectedPlan, setSelectedPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [users, setUsers] = useState(1);

  const toggleAnnual = () => {
    setIsAnnual(!isAnnual);
  };

  const handleUsersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsers(Number(event.target.value));
  };

  const price = isAnnual ? plan.annualPrice : plan.price;
  const total = Number(price.replace(/[^0-9.-]+/g,"")) * users;

  const handleSignUp = async () => {
    setSelectedPlan(plan.name);
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plan: plan.name, users, isAnnual }),
    });

    if (!response.ok) {
      // Handle error
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ${selectedPlan === plan.name ? 'border-4 border-blue-500' : ''}`}>
      <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
      <ul className="mb-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center mb-4">
        <label htmlFor="annual" className="mr-2 text-gray-700">Annual</label>
        <input type="checkbox" id="annual" checked={isAnnual} onChange={toggleAnnual} className="cursor-pointer form-checkbox h-5 w-5 text-blue-600" />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="users" className="mr-2 text-gray-700">Users</label>
        <input type="number" id="users" value={users} onChange={handleUsersChange} min="1" className="border-2 border-gray-200 rounded-md p-1 w-16 text-center" />
      </div>
      <p className="text-xl font-bold mb-4">${total.toFixed(2)}/month</p>
      <button onClick={handleSignUp} className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 transition-colors duration-300">Sign Up</button>
    </div>
  );
};

export default PricingCard;