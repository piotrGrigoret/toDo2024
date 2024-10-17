import React from 'react';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router-dom';

export const Registration: React.FC = () => {
  return (
      <Container sx={{flexDirection:{xs: 'column', sm:'column', md:'row'}}}>
          <Box component='div' sx={{width:{xs: 'auto', sm:'auto', md:'45%'}, height: '80%'}}>
            <img style={{ width: '100%', height: '100%' }}  src='/assets/svg/mainImage3.svg' alt='registration' />          
          </Box>
          <Box component='div' sx={{width:{xs: '90%', sm:'90%', md:'45%' }}}>
            <Box component='h1' sx={{fontSize:'20px', textAlign:{xs:'center', sm:'center', md:'left'}}}>
              What is your name?
            </Box>
            <Box component='div' sx={{display:'flex', flexDirection:{xs: 'column', sm:'column', md:'row'}, gap: '1px'}}>
              <TextField  label='Your Name' sx={{width: '100%'}} />
              <Link to='/tasks'>
                <Button  sx={{width:'100%', height:'100%'}}>
                  <ArrowCircleRightOutlinedIcon/>
                </Button>
              </Link>
            </Box> 
          </Box>
      </Container>
 
    )

}
