import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'darkblue',
    }
  }
});

export default useStyles;
