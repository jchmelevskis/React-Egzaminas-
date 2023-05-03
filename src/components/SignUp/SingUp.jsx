import React from 'react';
import { Button } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import './index.scss';

function SingUp() {
  return (
    <>
      <h1 className="title">Get Started</h1>
      <h5>Already have an account?</h5>
      <span className="login">Log In</span>
      <div className="container-buttons">
        <Button
          variant="outlined"
          sx={{
            textTransform: 'lowercase', border: '1px solid #E2E2E2', width: '150px', color: 'black',
          }}
        >
          sign up
        </Button>
        <img className="gmail-icon" alt="" src="https://img.icons8.com/color/30/000000/google-logo.png" />
        <Button startIcon={<FacebookRoundedIcon />} variant="contained" sx={{ textTransform: 'lowercase', width: '150px' }}>sign up</Button>
      </div>
      <span className="span-or">Or</span>
    </>
  );
}

export default SingUp;
