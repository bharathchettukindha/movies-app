import React from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    alert('Logout successful!');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="flex justify-between items-center bg-stone-100 p-4">
      <div className="flex items-center">
        <BiCameraMovie className="text-4xl mr-10 ml-3 text-black" />
        <Link to="/" className="text-2xl font-bold text-blue-500">Movie App</Link>
        <Link to="/watchlist" className="text-2xl font-bold ml-10 text-blue-500">My Watchlist</Link>
      </div>
      <div className="flex items-center">
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
