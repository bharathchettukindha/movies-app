import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = users.find(
      (user) => user.email === form.email && user.password === form.password
    );

    if (matchedUser) {
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      setUser(matchedUser);
      alert('Login successful!');
      navigate('/');
    } else {
      alert('User not found or invalid credentials. Please register.');
      navigate('/Signup');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-10 rounded-xl shadow-md w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 mb-4 border rounded" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full p-3 mb-6 border rounded" required />
        <a href="/Signup" className="text-blue-600 hover:underline">Don't have an account? Sign up</a>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
