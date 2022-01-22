import React from "react";
import "./App.css";
import { Switch, Route, Redirect, useHistory, withRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.components";

import TrendingPage from "./Pages/Trending/Trending.page";
import SearchPage from "./Pages/Search/Search.pages";
import UpcommingPage from "./Pages/Upcomming/Upcomming.page";
import HomePage from "./Pages/Home/Home.pages";
import SignInAndSignUpPage from "./Pages/SignInAndSignUp/SignInAndSignUpPage.components";
import SignUpPage from "./Pages/signup/signup-page.component";
import AccountPage from './Pages/Account/account-page.component';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { createUserProfileDocument, auth } from "./firebase/firebase.utils";
import { setCurrentUser } from './Redux/user/user.actions';
import { selectCurrentUser } from './Redux/user/user.selectors'
import HeaderSignInWhite from './components/header-sign-in-white/header-signIn-white.component';
import WhoIsWatching from "./Pages/whos-watching/who-is-watching-page.component"




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
        {/* <Header currentUser={this.props.currentUser} /> */}
        {/* <Navbar currentUser={this.props.currentUser} /> */}



        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/trending" component={TrendingPage} />
          <Route exact path="/upcomming" component={UpcommingPage} />
          <Route exact path="/search" component={SearchPage} />

          <Route exact path='/whoswatching' component={WhoIsWatching} />
          <Route
            exact
            path="/signinandsignup"
            component={SignInAndSignUpPage}
          />
          <Route
            exact
            path="/signup"
            component={SignUpPage}
          />
          <Route exact path="/accountpage" component={AccountPage} />


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
