import  React from 'react';
import styles from './Navigation.module.scss';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../../redux/slices/taskSlice';
import { FilterStatus } from '../../redux/slices/taskSlice';
export const Navigation = () => {
  const dispath = useDispatch();
  const onClickFilterTaskHanlder = (filterStatus: FilterStatus) =>{
    dispath(filterTasks(filterStatus));
  }
  const [value, setValue] = React.useState(0);
  return (
    <Paper sx={{position:'absolute', bottom: 0, left: 0, right: 0, zIndex:10 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
         }}
        >
          <BottomNavigationAction  onClick={() => onClickFilterTaskHanlder('all')} className={styles.nav_buttons}   label="All"  icon={<DensitySmallOutlinedIcon />} />
          <BottomNavigationAction onClick={() => onClickFilterTaskHanlder('active')} className={styles.nav_buttons}   label="Active" icon={<NotificationsActiveOutlinedIcon/>} />
          <BottomNavigationAction onClick={() => onClickFilterTaskHanlder('completed')} className={styles.nav_buttons}   label="Completed" icon={<AddTaskOutlinedIcon />} />
          <BottomNavigationAction onClick={() => onClickFilterTaskHanlder('clear')} className={styles.nav_buttons}   label="Clear Completed" icon={<HighlightOffOutlinedIcon />} />
        </BottomNavigation>
      </Paper>
  )
}
