
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Work Sans', sans-serif",
  },
  components: {
    MuiContainer: {
        defaultProps: {
            maxWidth: 'lg',
        },
        styleOverrides: {
        root: ({ theme }) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxHeight: '90vh',
          // position:'relative',
          // minHeight: '20vh',
          // [theme.breakpoints.down('md')]: {
          //   flexDirection: 'column',
          // },
          // [theme.breakpoints.up('md')]: {
          //   flexDirection: 'row',
          // },
        }),
      },
    },
    
  },
});

export default theme;
