import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.find((user) => user.email === form.email);
    if (userExists) {
      alert('User already exists. Please login.');
      navigate('/login');
      return;
    }

    const newUser = { ...form };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-md w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Sign Up</h2>
        <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-3 mb-4 border rounded" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 mb-4 border rounded" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full p-3 mb-6 border rounded" required />
        <input name="confirm-password" type="password" value={form['confirm-password']} onChange={handleChange} placeholder="Confirm Password" className="w-full p-3 mb-6 border rounded" required />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
