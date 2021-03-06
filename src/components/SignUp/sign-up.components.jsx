import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";
import CustomButton from "../CustomButton/CustomButton.components";
import FormInput from "./../form-input/form-input.components";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }


  componentDidMount = () => {
    if (localStorage.getItem('email').length > 0) {
      this.setState({ email: localStorage.getItem('email') })
    } else {
      this.setState({ email: '' })
    }

  }


  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords Dont Match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            autoComplete="username"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            autoComplete="new-password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            autoComplete="new-password"
            required
          />
          <CustomButton id="signUpbtn" type="submit">
            Create Account
          </CustomButton>
          <span className='iUnderstand'>I understand that MovieKnight Universal might send me marketing messages. By creating an account, I agree to the <u>Terms of Use</u> and <u>Privacy Policy </u>.</span>
        </form>
      </div>
    );
  }
}

export default SignUp;