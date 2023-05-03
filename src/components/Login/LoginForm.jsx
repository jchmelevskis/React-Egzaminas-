import React from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from '../../assets/mui-theme';

import './index.scss';

function LoginForm() {
  const [nameError, setNameError] = React.useState(false);
  const [passwordErrorLength, setPasswordErrorLength] = React.useState(false);

  const nameRef = React.useRef();
  const passwordRef = React.useRef();
  const emailRef = React.useRef();

  const submit = async () => {
    if (nameRef.current.value.length < 4 || nameRef.current.value.length > 20) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (passwordRef.current.value.length < 4 || passwordRef.current.value.length > 20) {
      setPasswordErrorLength(true);
    } else {
      setPasswordErrorLength(false);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <span className="label">Name</span>
      <TextField
        error={nameError}
        helperText={nameError ? 'Name must in range 4-20' : ''}
        inputRef={nameRef}
        type="text"
        sx={{
          width: 1,
        }}
        color="basic"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <PersonOutlineIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <span className="label">Email</span>
      <TextField
        inputRef={emailRef}
        color="basic"
        type="email"
        sx={{ width: 1 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <MailOutlineIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <span className="label">Password</span>
      <TextField
        error={passwordErrorLength}
        helperText={passwordErrorLength ? 'Password must in range 4-20' : ''}
        inputRef={passwordRef}
        color="basic"
        type="password"
        sx={{ width: 1 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <LockIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={submit}
        variant="contained"
        color="basic"
        sx={{
          color: 'white',
          width: 1,
          marginTop: 2,
          textTransform: 'none',
          fontSize: '20px',
        }}
      >
        Submit
      </Button>
    </ThemeProvider>
  );
}

export default LoginForm;
