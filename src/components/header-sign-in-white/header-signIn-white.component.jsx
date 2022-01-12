import React from "react";
import './header-signin-white.styles.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { selectMenuHidden } from "../../Redux/dropdown-menu/dropdown-menu.selectors";
import { toggleDropDownMenuHidden } from "../../Redux/dropdown-menu/dropdown-menu.actions";

import AccountIcon from "../account-icon/account-icon.component";
import AccountDropdown from "../account-dropdown-menu/account-dropdown-menu.component";




const HeaderSignInWhite = ({ history, currentUser, hidden, toggleDropDownMenuHidden }) => {
    return (
        <Router>
            <div className="white__header-container">
                <h1 onClick={() => history.push("/")} className="white__header">
                    Movie Knight
                </h1>
                <div className="white__header__dots-flexed">
                    <div className="dot" id="one"></div>
                    <div className="dot" id="two"></div>
                    <div className="dot" id="three"></div>
                    <div className="dot" id="four"></div>
                    <div className="dot" id="five"></div>
                    <div className="dot" id="six"></div>
                </div>

                <div className='white__signInAndOut'>
                    {currentUser ?
                        (<div className="white__signOut-header" onClick={() => auth.signOut()}>

                            SIGN OUT
                        </div>)
                        :

                        (
                            <div className='white__signIn-signOut-container'>
                                <span
                                    className="white__signUp-header"
                                    onClick={() => history.push("/SignInAndSignUp")}
                                >
                                    Sign In
                                </span>
                                <AccountIcon />
                                {hidden ? null : (<AccountDropdown />)}

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderSignInWhite));