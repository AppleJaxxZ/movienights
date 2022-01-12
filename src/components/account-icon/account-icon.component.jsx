import React from 'react';
import './account-icon.styles.scss'
import { connect } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toggleDropDownMenuHidden } from '../../Redux/dropdown-menu/dropdown-menu.actions';

const AccountIcon = ({ toggleDropDownMenuHidden }) => {

    return (
        <div className='accountIcon' onClick={toggleDropDownMenuHidden}>
            <AccountCircleIcon className="circleIcon-header" sx={{ fontSize: 20 }} />


        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleDropDownMenuHidden: () => dispatch(toggleDropDownMenuHidden())
})

export default connect(null, mapDispatchToProps)(AccountIcon);