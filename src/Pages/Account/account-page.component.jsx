import React from 'react';
import './account-page.styles.scss';
import HeaderAccountPage from '../../components/header-account-page/headerAccountPage.component'


const AccountPage = ({ history }) => {


    return (
        <div className='accountPage-container'>
            <HeaderAccountPage history={history} />


            <div>HELLOOOOOO</div>

        </div>
    )
}

export default AccountPage;