import  React from 'react';
import styles from './Navigation.module.scss';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';


export const Navigation = () => {

  return (
    <Paper sx={{position:'absolute', bottom: 0, left: 0, right: 0, zIndex:10 }} elevation={3}>
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction className={styles.nav_buttons} sx={{color: '#1976d2'}}  label="All" icon={<DensitySmallOutlinedIcon />} />
          <BottomNavigationAction className={styles.nav_buttons} sx={{color: '#1976d2'}}  label="Active" icon={<NotificationsActiveOutlinedIcon/>} />
          <BottomNavigationAction className={styles.nav_buttons} sx={{color: '#1976d2'}}  label="Completed" icon={<AddTaskOutlinedIcon />} />
          <BottomNavigationAction className={styles.nav_buttons} sx={{color: '#1976d2'}}  label="Clear Completed" icon={<HighlightOffOutlinedIcon />} />
        </BottomNavigation>
      </Paper>
  )
}
