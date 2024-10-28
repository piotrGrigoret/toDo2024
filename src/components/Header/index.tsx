import React from 'react';
import styles from './Header.module.scss';
import {useNavigate, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

export const Header:React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const onClickHandler = () =>{
    navigate('/');
  }
  
  
  return (
    <Container sx={{height:'70px', position:'relative', flexDirection: {xs: 'row', sm:'row', md:'row'}}}>
        {location.pathname.length > 1 &&
          <Box component={'div'} className={styles.headerlink}>
            <Button  onClick={onClickHandler}   sx={{ height:'56px'}}>
              <ArrowCircleLeftOutlinedIcon/>
            </Button>
          </Box>
        }
        <img className={styles.mainImage}  src='/assets/png/logo1.png' alt='registration' />   
      </Container>

  )
}
