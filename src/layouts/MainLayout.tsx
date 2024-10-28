import React from 'react';
import { Box } from '@mui/material';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import IntegrationNotistack from '../components/IntegrationNotistack';

export const MainLayout: React.FC = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
