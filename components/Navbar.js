"use client"; // This tells Next.js that this is a Client Component

import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import GroupIcon from '@mui/icons-material/Group';
import HistoryIcon from '@mui/icons-material/History';
import { useRouter } from 'next/navigation'; // Use next/navigation for app directory routing

const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // New useRouter from next/navigation

  // Function to handle navigation
  const handleNavigation = (newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/home'); // Navigate to /home
        break;
      case 1:
        router.push('/subscribe'); // Navigate to /subscribe
        break;
      case 2:
        router.push('/community'); // Navigate to /community
        break;
      case 3:
        router.push('/history'); // Navigate to /history
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleNavigation(newValue)}
      showLabels
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#f3eaf9', // Customize the color to match your wireframe
        zIndex: 1000,
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Subscribe" icon={<SubscriptionsIcon />} />
      <BottomNavigationAction label="Community" icon={<GroupIcon />} />
      <BottomNavigationAction label="History" icon={<HistoryIcon />} />
    </BottomNavigation>
  );
};

export default Navbar;
