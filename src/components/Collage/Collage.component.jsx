import React, { useEffect } from "react";
import MovieCollage from "../../media/movieknight-background.webp";
import "./Collage.styles.scss";

const Collage = () => {
  const dateObj = new Date();
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  useEffect(() => {
    console.log(
      `To day is ${month}, ${day}, ${year}.  Please visit us back soon.`
    );
  });
  return (
    <div className="collage">
      <img className="collage-img" src={MovieCollage} alt="movies collage" />
      <div className="text-overlay">
        A Peacock semi-clone..
        <br /> Under Current Development {month}/{day}/{year}.
        <br /> Many Updates..<u>COMMING SOON</u>
        <div className="collage__input-flex-container">
          <input className="collage__input" placeholder="    Enter your email address" name='email' type='email' />
          <button className='collage__signup-button'>Watch Now</button>
        </div>
        <br /><span className='collage__underInput-text'>Plans start at free - no credit card required.</span>
      </div>

    </div>
  );
};

export default Collage;