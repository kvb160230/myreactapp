import React from 'react';
import { auth } from '../firebase/firebase.utils';
import './Header.scss';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = ({ currentUser }) => (
  <div className='header'>
    <div>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          <Button
          disableElevation
          variant="contained"
          color="default"
          endIcon={<ExitToAppIcon />}
      >
        Sign Out
      </Button>
        </div>
      ) : null}
    </div>
  </div>
);

export default Header;