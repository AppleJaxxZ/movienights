import React, { useEffect } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TrendingPage from './Pages/Trending/Trending.page';
import SearchPage from './Pages/Search/Search.pages';
import UpcommingPage from './Pages/Upcomming/Upcomming.page';
import HomePage from './Pages/Home/Home.pages';
import SignInAndSignUpPage from './Pages/SignInAndSignUp/SignInAndSignUpPage.components';
import SignUpPage from './Pages/signup/signup-page.component';
import AccountPage from './Pages/Account/account-page.component';

import { useDispatch, useSelector } from 'react-redux';

import { createUserProfileDocument, auth } from './firebase/firebase.utils';
import { setCurrentUser } from './Redux/user/user.actions';

import WhoIsWatching from './Pages/whos-watching/who-is-watching-page.component';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(({ user }) => user.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      dispatch(setCurrentUser(userAuth));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/trending" component={TrendingPage} />
          <Route exact path="/upcomming" component={UpcommingPage} />
          <Route exact path="/search" component={SearchPage} />

          <Route exact path="/whoswatching" component={WhoIsWatching} />
          <Route
            exact
            path="/signinandsignup"
            component={SignInAndSignUpPage}
          />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/accountpage" component={AccountPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
