import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className='relative w-64 bg-gray-800 text-white h-full'>
      <div className='p-6'>
        <h2 className='text-2xl font-bold mb-6'>Admin Dashboard</h2>
        <ul>
          <li>
            <Link
              to='/'
              className='flex items-center p-4 hover:bg-gray-700 rounded-lg transition-colors duration-200'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/drivers'
              className='flex items-center p-4 hover:bg-gray-700 rounded-lg transition-colors duration-200'
            >
              Drivers
            </Link>
          </li>
          <li>
            <Link
              to='/create'
              className='flex items-center p-4 hover:bg-gray-700 rounded-lg transition-colors duration-200'
            >
              Create Driver
            </Link>
          </li>
        </ul>
      </div>

      <div className='absolute bottom-0 w-full border-t border-gray-700'>
        <div className='bg-gray-900 text-white absolute bottom-0 w-full border-t border-gray-700'>
          <button
            onClick={handleLogout}
            className='block w-full p-4 text-left hover:bg-gray-800 rounded-lg transition-colors duration-200'
          >
            <LogoutIcon className='inline mr-2' /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
