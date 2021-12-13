import React from "react";
import "../Navbar/Navbar.styles.scss";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import Header from "../Header/Header.components"

export const Navbar = ({ history, currentUser }) => {
  
  return (
    <Router>
       <Header />
      <div className="nav-container">
        <ul className="flex-navlist">
          {currentUser ? (
            <ul className="signedIn-navbar">
              <li id="search-signedin" onClick={() => history.push("/search")}>Search</li>
              <li id="trending-signedin" onClick={() => history.push("/trending")}>Trending</li>
              <li id="upcoming-signedin" onClick={() => history.push("/upcomming")}>Upcoming</li>
              <li id="tvshows-signedin">TV Shows</li>
              <li id="signout-signedin" className="option" onClick={() => auth.signOut()}>
                SIGN OUT
              </li>
            </ul>
          ) : (
            <li
              className="signInSignUp"
              onClick={() => history.push("/SignInAndSignUp")}
            >
              SIGN IN / SIGN UP
            </li>
          )}
        </ul>
      </div>
    </Router>
  );
};

export default withRouter(Navbar);