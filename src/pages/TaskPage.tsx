import React from 'react'
import Container from '@mui/material/Container';
import { TextField, Box} from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Button from '@mui/material/Button';
import { Catalog } from '../components/Catalog';
import { useSelector } from 'react-redux';
import { selectRegistration } from '../redux/slices/registrationSlice';
import { useDispatch } from 'react-redux';
import { selectTask, setTaskName, setTaskDescription, addTask } from '../redux/slices/taskSlice';
import { useSnackbar } from 'notistack';
import { error } from 'console';

export const TaskPage: React.FC = () => {
  const dispath = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {name} = useSelector(selectRegistration); 
  const {task} = useSelector(selectTask);
  
  const setTaskNameHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    dispath(setTaskName(event.target.value));
  }
  const setTaskDescriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    dispath(setTaskDescription(event.target.value))
  }
  const addTaskHandler = () =>{
    if(task.name.length > 0){
      dispath(addTask());
    }else{
      enqueueSnackbar('Add task name', {
        variant: 'error',
        autoHideDuration: 1500,
      });
    }
  }


  return (
    <Container sx={{flexDirection: 'column', justifyContent:'start',}}>
        <Box component='div'>
          <Box component='h3' sx={{textAlign:'center', fontSize:{xs: '14px', sm:'18px', md:'18px'}}}>Hi {name}, wishing you a productive day!
          </Box>
          <Box component='div'  sx={{display:'flex',  width:{xs: '100%', sm:'400px', md:'400px'}, flexDirection:{xs: 'column', sm:'column', md:'column'}, gap: '5px'}}>
              <TextField onChange={setTaskNameHandler} value={task.name} label='Task' sx={{width: '100%'}} />
              <TextField onChange={setTaskDescriptionHandler} value={task.description} label='Description' sx={{width: '100%'}} />
              <Button onClick={addTaskHandler}>
                <CheckCircleOutlinedIcon/>
              </Button>
          </Box>
        </Box>
        <Catalog/>
    </Container>
  )
}
