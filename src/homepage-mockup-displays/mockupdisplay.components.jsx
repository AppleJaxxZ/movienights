import React from 'react';
import "./mockupdisplay.styles.scss"
import MockUpImage from "../media/movienightMockUp.png"

const MockUpDisplay = () => (
    <div className="mockUpDisplay__container">
        <span className="mockUpDisplay__headingOne">See What It's Like To MovieKnight.</span><br/>
        <span className="mockUpDisplay__headingTwo">Watch on your favorite devices. Share with friends and family.</span>

        <img className="mockUpDisplay__image" src={MockUpImage} alt="This is what MovieKnight looks like on other devices" />
    </div>
)

export default MockUpDisplay;