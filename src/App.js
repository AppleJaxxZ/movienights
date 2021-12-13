import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.components";

import TrendingPage from "./Pages/Trending/Trending.page";
import SearchPage from "./Pages/Search/Search.pages";
import UpcommingPage from "./Pages/Upcomming/Upcomming.page";
import HomePage from "./Pages/Home/Home.pages";
import SignInAndSignUpPage from "./Pages/SignInAndSignUp/SignInAndSignUpPage.components";
import { auth } from "./firebase/firebase.utils";
import SignUp from "./components/SignUp/sign-up.components";
import SignIn from "./components/SignIn/sign-in.components"
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
       
        <Navbar currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/trending" component={TrendingPage} />
          <Route path="/upcomming" component={UpcommingPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route
            exact
            path="/signinandsignup"
            component={SignInAndSignUpPage}
          />
          <Route
            exact
            path="/signin"
            component={SignIn} 
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

export default App;
