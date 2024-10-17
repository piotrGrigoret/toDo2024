import * as React from 'react';
import List from '@mui/material/List';
import Task from '../Task';
import { Box } from '@mui/material';
import { Navigation } from '../Navigation';

export default function Catalog() {
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
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </List>
      <Navigation/>

    </Box>
  );
}