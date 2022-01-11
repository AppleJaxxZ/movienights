import React from "react";
import "./sign-in.styles.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../CustomButton/CustomButton.components";
import FormInput from "./../form-input/form-input.components";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rememberMe: false
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, rememberMe } = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('password', password);
    localStorage.setItem('email', rememberMe ? email : '');

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      alert('You have successfully logged in!');
      this.props.history.push("/SearchPage");
    } catch (error) {
      alert("The email or password provided did not match our database.  Please try again or click sign up.")
      console.log(error);
    }


  };



  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeTwo = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [input.name]: value });
  }

  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const email = rememberMe ? localStorage.getItem('email') : '';
    const password = rememberMe ? localStorage.getItem('password') : '';
    this.setState({ email, password, rememberMe });
  }
  render() {
    return (
      <Router>
        <div className="sign-in">

          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              handleChange={this.handleChange}
              value={this.state.email}
              label="email"
              autoComplete="username"
              required
            />

            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="password"
              autoComplete="current-password"
              required
            />
            <label htmlFor="rememberMe" id="staySignedIn">
              <input className="keepMeSignedIn" name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChangeTwo} type="checkbox" /> Keep Me Signed In
            </label>
            <div className="buttons">
              <CustomButton type="submit"> Sign In </CustomButton>
            </div>
          </form>

          <button
            className="GoogleBtn"
            type="button"
            onClick={signInWithGoogle}

          >
            <img className="sign-in__withGoogle-img" alt="google-logo" src="https://img.icons8.com/ios/50/000000/google-plus.png" />
            <span className="SignInWithGoogle">Sign In With Google</span>
          </button>
          <div className="signUp__newToMovieKnight-container">
            <span className="signUp__new">New to MovieKnight? </span>
            <span className="SignUp__forFree" id="forFree" tabIndex={0} onClick={() => this.props.history.push("/SignUp")}>Sign-Up Free</span>
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(SignIn);