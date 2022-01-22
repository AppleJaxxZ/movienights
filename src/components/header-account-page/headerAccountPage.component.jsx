import React from "react";
import './headerAccountPage.styles.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { selectMenuHidden } from "../../Redux/dropdown-menu/dropdown-menu.selectors";


import AccountIcon from "../account-icon/account-icon.component";
import AccountDropdown from "../account-dropdown-menu/account-dropdown-menu.component";




const HeaderAccountPage = ({ history, currentUser, hidden, }) => {
    console.log(history, "from Header of accountPage")
    return (
        <Router>
            <div className="account__header-container">
                <h1 onClick={() => history.push("/")} className="account__header">
                    Movie Knight
                </h1>
                <div className="account__header__dots-flexed">
                    <div className="dot" id="one"></div>
                    <div className="dot" id="two"></div>
                    <div className="dot" id="three"></div>
                    <div className="dot" id="four"></div>
                    <div className="dot" id="five"></div>
                    <div className="dot" id="six"></div>
                </div>

                <div className='account__signInAndOut'>
                    {currentUser ?
                        (<div className="account__signOut-header" onClick={() => auth.signOut()}>

                            SIGN OUT
                        </div>)
                        :

                        (
                            <div className='account__signIn-signOut-container'>
                                <span
                                    className="account__signUp-header"
                                    onClick={() => history.push("/signinandsignup")}
                                >
                                    Watch MovieKnight
                                </span>
                                <AccountIcon />
                                {hidden ? null : (<AccountDropdown history={history} />)}

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


export default withRouter(connect(mapStateToProps)(HeaderAccountPage));