import * as React from 'react';
import List from '@mui/material/List';

import { Box } from '@mui/material';
import { Navigation } from '../Navigation';
import { useSelector } from 'react-redux';
import { selectTask } from '../../redux/slices/taskSlice';
import { Task } from '../Task';
export const Catalog: React.FC = () => {
  const {tasks} = useSelector(selectTask);
  return (
    <Box sx={{flex:1}} component='div'>
      <List
        sx={{
          width: {xs:'90vw' , sm:'90vw', md:460},
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: '35vh',
          margin: '0 auto',
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        
        {tasks.map((task, index)=>(
          <Task task = {task} id = {task.id} key={task.id}/>
        ))

        }
      </List>
      <Navigation/>
    </Box>
  );
}