import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('authToken');

    // Optionally, you can also clear other user-related data

    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <div className='relative w-64 bg-blue-800 text-white h-full'>
      <div className='p-6'>
        <h2 className='text-2xl font-bold mb-6'>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to='/' className='flex items-center p-4 hover:bg-blue-700'>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/drivers'
              className='flex items-center p-4 hover:bg-blue-700'
            >
              Drivers
            </Link>
          </li>
          <li>
            <Link
              to='/create'
              className='flex items-center p-4 hover:bg-blue-700'
            >
              CREATE
            </Link>
          </li>
          <li>
            <Link
              to='/reports'
              className='flex items-center p-4 hover:bg-blue-700'
            >
              Reports
            </Link>
          </li>
        </ul>
      </div>

      {/* User Profile Section */}
      <div className='absolute bottom-0 w-full border-t border-blue-700'>
        <div
          className='flex items-center p-4 cursor-pointer hover:bg-blue-700'
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <img
            src='/path-to-your-user-image.jpg' // Replace with actual user image
            alt='User'
            className='w-12 h-12 rounded-full border-2 border-white mr-3'
          />
          <span>Username</span>
          <MenuIcon className='ml-auto text-xl' />
        </div>
        {isDrawerOpen && (
          <div className='bg-blue-900 text-white absolute bottom-0 w-full border-t border-blue-700'>
            <Link to='/profile' className='block p-4 hover:bg-blue-800'>
              <AccountCircleIcon className='inline mr-2' /> Profile
            </Link>
            <button
              onClick={handleLogout}
              className='block w-full p-4 text-left hover:bg-blue-800'
            >
              <LogoutIcon className='inline mr-2' /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
