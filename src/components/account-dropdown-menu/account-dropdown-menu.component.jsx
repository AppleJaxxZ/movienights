import React from 'react';
import './account-menu-dropdown.styles.scss';

const AccountDropdown = ({ history }) => {
  console.log(history, 'DropDown Component History');

  return (
    <div className="dropdown-menu">
      <div className="dropdown__menu-items">
        <span
          onClick={() => history.push('/accountpage')}
          className="account_menu-item"
        >
          {' '}
          Account
        </span>
        <span className="help_menu-item">Help</span>
        <span
          className="signIn_menu-item"
          onClick={() => history.push('/signinandsignup')}
        >
          Sign In
        </span>
      </div>
    </div>
  );
};

export default AccountDropdown;
