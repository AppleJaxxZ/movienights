import React from "react";
import "./SignInAndSignUpPage.styles.scss";
import SignIn from "./../../components/SignIn/sign-in.components";

import HeaderSignInWhite from "../../components/header-sign-in-white/header-signIn-white.component";

const SignInAndSignUp = ({ history }) => {

  return (
    < div >
      <HeaderSignInWhite history={history} />
      <div className='sign-in-header'>
        <span className='sign-in-header-text'>Sign In</span>
      </div>
      <div className="sign-in-and-sign-up">

        <SignIn className="sign-in-form" />

      </div>
    </div >
  )
}

export default SignInAndSignUp;