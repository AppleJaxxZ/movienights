import React from 'react';
import './account-menu-dropdown.styles.scss'


const AccountDropdown = () => {


    return (
        <div className='dropdown-menu'>
            <div className="dropdown__menu-items">
                <span className='account_menu-item'>Account</span>
                <span className='help_menu-item'>Help</span>
                <span className='signIn_menu-item' >Sign In</span>
            </div>
        </div>
    )
}

export default AccountDropdown;