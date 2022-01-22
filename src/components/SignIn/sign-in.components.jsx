import React, { useState } from 'react';
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton.components';
import FormInput from './../form-input/form-input.components';

import { useHistory } from 'react-router-dom';
/*
this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };
*/

/*
 componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const email = rememberMe ? localStorage.getItem('email') : '';
    const password = rememberMe ? localStorage.getItem('password') : '';
    this.setState({ email, password, rememberMe });
  }
*/
const SignIn = () => {
  const history = useHistory();
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const { email, password, rememberMe } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('password', password);
    localStorage.setItem('email', rememberMe ? email : '');

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
      alert('You have successfully logged in!');

      // history.push('/whoswatching');
    } catch (error) {
      alert(
        'The email or password provided did not match our database.  Please try again or click sign up.'
      );
      console.log(error);
    }
    history.push('/whoswatching');
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleChangeTwo = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    setCredentials({ ...userCredentials, [input.name]: value });
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          autoComplete="username"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          autoComplete="current-password"
          required
        />
        <label htmlFor="rememberMe" id="staySignedIn">
          <input
            className="keepMeSignedIn"
            name="rememberMe"
            checked={rememberMe}
            onChange={handleChangeTwo}
            type="checkbox"
          />{' '}
          Keep Me Signed In
        </label>
        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
        </div>
      </form>
      <button className="GoogleBtn" type="button" onClick={signInWithGoogle}>
        <img
          className="sign-in__withGoogle-img"
          alt="google-logo"
          src="https://img.icons8.com/ios/50/000000/google-plus.png"
        />
        <span className="SignInWithGoogle">Sign In With Google</span>
      </button>
      <div className="signUp__newToMovieKnight-container">
        <span className="signUp__new">New to MovieKnight? </span>
        <span
          className="SignUp__forFree"
          id="forFree"
          tabIndex={0}
          onClick={() => this.props.history.push('/SignUp')}
        >
          Sign-Up Free
        </span>
      </div>
    </div>
  );
};

export default SignIn;
