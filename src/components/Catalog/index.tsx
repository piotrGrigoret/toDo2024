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
          width: '100%',
          maxWidth: 460,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: '35vh',
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        
        {tasks.map((task, index)=>(
          <Task task = {task} index = {index} key={index}/>
        ))

        }
      </List>
      <Navigation/>

    </Box>
  );
}