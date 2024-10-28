import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import { CheckboxProps } from '@mui/material/Checkbox';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';

export default function Task() {
  
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxChange: CheckboxProps['onChange'] = (event) => {
    event.stopPropagation(); 
    setChecked(event.target.checked);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        
      >
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
        />
        
        <Box 
          component="p"
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            marginLeft: 1,
            width: '10vw',
            // wordBreak: 'break-word',
          }}  
        >
          Accordion1Accordion1Accordion1Accordion1Accordion1
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
        
      </AccordionDetails>
  </Accordion>

  );
}