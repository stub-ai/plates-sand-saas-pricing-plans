import React, { useState } from 'react';

const ContactUsForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`Name: ${name}, Email: ${email}, Date: ${date}, Message: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="name" className="mr-2 text-white">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} className="border-2 border-gray-200 rounded-md p-1 w-64" required />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="email" className="mr-2 text-white">Email</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} className="border-2 border-gray-200 rounded-md p-1 w-64" required />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="date" className="mr-2 text-white">Meeting Date</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} className="border-2 border-gray-200 rounded-md p-1 w-64" required />
      </div>
      <div className="flex items-start mb-4">
        <label htmlFor="message" className="mr-2 text-white">Message</label>
        <textarea id="message" value={message} onChange={handleMessageChange} className="border-2 border-gray-200 rounded-md p-1 w-64" rows={4} />
      </div>
      <button type="submit" className="bg-white text-blue-500 rounded-lg px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300">Submit</button>
    </form>
  );
};

export default ContactUsForm;