import React from "react";
import "../Navbar/Navbar.styles.scss";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../Redux/user/user.selectors";


export const Navbar = ({ history, currentUser }) => {

  return (
    <Router>
      <div className="nav-container">
        <ul className="flex-navlist">
          {currentUser ? (
            <ul className="signedIn-navbar">
              <li id="search-signedin" onClick={() => history.push("/search")}>Search</li>
              <li id="trending-signedin" onClick={() => history.push("/trending")}>Trending</li>
              <li id="upcoming-signedin" onClick={() => history.push("/upcomming")}>Upcoming</li>
              <li id="tvshows-signedin">TV Shows</li>
            </ul>
          ) : (
            ""
          )}
        </ul>
      </div>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(Navbar));