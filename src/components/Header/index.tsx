import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
export const Header:React.FC = () => {
  return (
    <Container sx={{height:'70px', position:'relative',flexDirection: {xs: 'row', sm:'row', md:'row'}}}>
        <Link to='/' className={styles.headerlink}>
          <Button  sx={{width:'100%', height:'56px'}}>
            <ArrowCircleLeftOutlinedIcon/>
          </Button>
        </Link>
        <img className={styles.mainImage}  src='/assets/png/logo1.png' alt='registration' />          
        
    </Container>

  )
}
