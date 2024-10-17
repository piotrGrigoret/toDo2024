import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ManageHistoryRoundedIcon from '@mui/icons-material/ManageHistoryRounded';
import { CheckboxProps } from '@mui/material/Checkbox';
import { useState } from 'react';
import { Box } from '@mui/material';

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
        {/* <DeleteForeverRoundedIcon/> 
        <ManageHistoryRoundedIcon/> */}
        {/* Доделать */}
        <Box 
          component={'p'}
          
        >Accordion1</Box>
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
        
      </AccordionDetails>
  </Accordion>

  );
}