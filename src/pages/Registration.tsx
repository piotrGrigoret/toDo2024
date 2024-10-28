import React, { useEffect } from 'react';

import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName, selectRegistration, checkAuth} from '../redux/slices/registrationSlice';
import { useSelector } from 'react-redux';
import { VariantType, useSnackbar } from 'notistack';



export const Registration: React.FC = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const {name, snackBarMsg, snackBarStatus, isAuth} = useSelector(selectRegistration); 
  
  useEffect(() =>{
    dispath(checkAuth());
  }, [dispath]);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {  
    dispath(setName(event.target.value));
    dispath(checkAuth());
  }
  

  const showSnackbar = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 1500,
    });
  };

  const onClickHandler = () =>{
    // sessionStorage.setItem('testKey', `${name}`);
    showSnackbar(snackBarMsg, snackBarStatus);
    isAuth && navigate('/tasks');
  }
  // console.log(sessionStorage.getItem('testKey')); // Выведет: "Это тестовое значение"

  

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
              <TextField onChange={onChangeName}  label='Your Name' value={name} sx={{width: '100%'}} />
                <Button onClick={onClickHandler}  >
                  <ArrowCircleRightOutlinedIcon/>
                </Button>
            </Box> 
          </Box>
      </Container>
 
    )

}
