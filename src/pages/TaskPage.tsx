import React from 'react'
import Container from '@mui/material/Container';
import { TextField, Box} from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Button from '@mui/material/Button';
import Catalog from '../components/Catalog';
export const TaskPage: React.FC = () => {
  return (
    <Container sx={{flexDirection: 'column', justifyContent:'start',}}>
        <Box component='div'>
          <Box component='h3' sx={{textAlign:'center', fontSize:{xs: '14px', sm:'18px', md:'18px'}}}>Hi Piotr, wishing you a productive day!
          </Box>
          <Box component='div'  sx={{display:'flex',  width:{xs: '100%', sm:'400px', md:'400px'}, flexDirection:{xs: 'column', sm:'column', md:'column'}, gap: '5px'}}>
              <TextField  label='Task' sx={{width: '100%'}} />
              <TextField  label='Description' sx={{width: '100%'}} />
              <Button>
                <CheckCircleOutlinedIcon/>
              </Button>
          </Box>
        </Box>
        <Catalog/>
    </Container>
  )
}
