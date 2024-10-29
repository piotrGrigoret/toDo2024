import * as React from 'react';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import { CheckboxProps } from '@mui/material/Checkbox';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setIsCheked } from '../../redux/slices/taskSlice';

interface Task {
  name: string;
  description: string;
  isChecked: boolean;
}

interface TaskProps {
  task: Task;
  index: number;
}

export  const Task: React.FC<TaskProps> = ({task, index}) => {
  const dispath = useDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const handleCheckboxChange: CheckboxProps['onChange'] = (event) => {
    event.stopPropagation(); 
    dispath(setIsCheked(index));

  };

  const handleAccordionChange: AccordionProps['onChange'] = (event, isExpanded) => {
    setOpen(isExpanded);
  };

  return (
    <Accordion onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        
      >
        <Checkbox
          checked={task.isChecked}
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
        />
        
        <Box 
          component="p"
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: open ? 'wrap' : 'nowrap' ,
            marginLeft: 1,
            width: '10vw',
            wordBreak:  'break-word',
          }}  
        >
          {task.name}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {task.description}
      </AccordionDetails>
  </Accordion>

  );
}