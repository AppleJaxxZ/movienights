import React from "react";
import "./SignInAndSignUpPage.styles.scss";
import SignIn from "./../../components/SignIn/sign-in.components";
import SignUp from "./../../components/SignUp/sign-up.components";

const SignInAndSignUp = () => (
  <div>
    <span className='sign-in-header'>Sign In</span>
    <div className="sign-in-and-sign-up">

      <SignIn className="sign-in-form" />

    </div>
  </div>
);

export default SignInAndSignUp;