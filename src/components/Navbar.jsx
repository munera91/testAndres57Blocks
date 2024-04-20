import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({onLogout}) => {
  const location = useLocation();

  // Obtener la ruta actual
  const currentPath = location.pathname;

  const {user} = useSelector((state) => state.authUser);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center absolute top-0 w-full">
      <div className="text-white text-xl font-bold">Pokemon App</div>
      <div className="flex items-center space-x-4">
        <Link
          to="/home"
          className={`text-white hover:text-gray-300 ${
            currentPath === '/home' ? 'text-blue-500' : ''
          }`}
        >
          HomePage
        </Link>
        <Link
          to="/favorites"
          className={`text-white hover:text-gray-300 ${
            currentPath === '/favorites' ? 'text-blue-500' : ''
          }`}
        >
          Favorites
        </Link>
        <div className="text-white pl-8">
          {user} <button onClick={onLogout} className="ml-2 text-red-500">Cerrar sesión</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
