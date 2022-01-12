import React from 'react';
import './signup-page.styles.scss'

import SignUp from '../../components/SignUp/sign-up.components';
import HeaderSignInWhite from '../../components/header-sign-in-white/header-signIn-white.component';


const SignUpPage = () => {

    return (
        <div>
            <HeaderSignInWhite />
            <div className='sign-in-header'>
                <span className='sign-in-header-text'>Sign Up</span>
            </div>
            <div className='signupPage__container'>
                <SignUp />
            </div>
        </div>

    )
}

export default SignUpPage