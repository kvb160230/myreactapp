import React from 'react';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import './SignInPage.scss';

const SignInPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInPage;