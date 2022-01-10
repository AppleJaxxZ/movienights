import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.components";

import TrendingPage from "./Pages/Trending/Trending.page";
import SearchPage from "./Pages/Search/Search.pages";
import UpcommingPage from "./Pages/Upcomming/Upcomming.page";
import HomePage from "./Pages/Home/Home.pages";
import SignInAndSignUpPage from "./Pages/SignInAndSignUp/SignInAndSignUpPage.components";
import SignUp from "./components/SignUp/sign-up.components";
import SignIn from "./components/SignIn/sign-in.components"
import Header from './components/Header/Header.components'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { createUserProfileDocument, auth } from "./firebase/firebase.utils";
import { setCurrentUser } from './Redux/user/user.actions';
import { selectCurrentUser } from './Redux/user/user.selectors'


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    console.log(this.props.currentUser)

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef)
        console.log(this.props.currentUser)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

        });
      }

      setCurrentUser(userAuth);
      console.log(userAuth)

    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.props.currentUser} />
        <Navbar currentUser={this.props.currentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/trending" component={TrendingPage} />
          <Route path="/upcomming" component={UpcommingPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route
            exact
            path="/signinandsignup"

            render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)}
          />
          <Route
            exact
            path="/signup"
            component={SignUp}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
