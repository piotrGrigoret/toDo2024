import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
export const MainLayout: React.FC = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
