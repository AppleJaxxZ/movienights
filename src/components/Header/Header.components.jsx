import React from 'react';
import '../Header/Header.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { selectMenuHidden } from '../../Redux/dropdown-menu/dropdown-menu.selectors';
import { selectCurrentUser } from '../../Redux/user/user.selectors';

const Header = ({ history, currentUser }) => {
  return (
    <div>
      <div className="header-container">
        <h1 onClick={() => history.push('/')} className="header">
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

        <div className="signInAndOut">
          {currentUser ? (
            <div className="signOut-header" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <div className="signIn-signOut-container">
              <span
                className="signUp-header"
                onClick={() => history.push('/signinandsignup')}
              >
                Sign In
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectMenuHidden,
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(Header));
