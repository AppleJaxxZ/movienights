import React from "react";
import "../Header/Header.styles.scss";

import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { selectMenuHidden } from "../../Redux/dropdown-menu/dropdown-menu.selectors";
import { toggleDropDownMenuHidden } from "../../Redux/dropdown-menu/dropdown-menu.actions";





const Header = ({ history, currentUser }) => {
  return (
    <Router>
      <div className="header-container">
        <h1 onClick={() => history.push("/")} className="header">
          Movie Knight
        </h1>
        <div className="header__dots-flexed">
          <div className="dot" id="one"></div>
          <div className="dot" id="two"></div>
          <div className="dot" id="three"></div>
          <div className="dot" id="four"></div>
          <div className="dot" id="five"></div>
          <div className="dot" id="six"></div>
        </div>

        <div className='signInAndOut'>
          {currentUser ?
            (<div className="signOut-header" onClick={() => auth.signOut()}>

              SIGN OUT
            </div>)
            :

            (
              <div className='signIn-signOut-container'><span
                className="signUp-header"
                onClick={() => history.push("/SignInAndSignUp")}
              >
                Sign In
              </span>
              </div>)

          }

        </div>

      </div>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectMenuHidden
})

const mapDispatchToProps = dispatch => ({
  toggleDropDownMenuHidden: () => dispatch(toggleDropDownMenuHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));