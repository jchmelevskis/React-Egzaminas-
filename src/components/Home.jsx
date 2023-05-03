import React from 'react';
import './index.scss';
import SingUp from './SignUp/SingUp';
import LoginForm from './Login/LoginForm';
import DesktopView from './DesktopView/DesktopView';

function Home() {
  return (
    <div className="container">
      <DesktopView />
      <div className="container-login-form">
        <SingUp />
        <LoginForm />
      </div>
    </div>
  );
}

export default Home;
