import React, { useState } from 'react';

const ContactUsForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="name" className="mr-2 text-gray-700">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} className="border-2 border-gray-200 rounded-md p-1 w-64" required />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="email" className="mr-2 text-gray-700">Email</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} className="border-2 border-gray-200 rounded-md p-1 w-64" required />
      </div>
      <button type="submit" className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 transition-colors duration-300">Submit</button>
    </form>
  );
};

export default ContactUsForm;