import React, {useState, useEffect} from 'react';
import "./TodaysTopThree.styles.scss"
import MovieLinker from './TodaysTopThree.movielinker';


const key = process.env.REACT_APP_APIKEY;


const TodaysTopThree = () => {
    const [movieData, setMovieData] = useState([]);
   const topthreeUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;

    useEffect(() => {
        fetch(topthreeUrl)
           .then((response) => response.json())
           .then((data) => setMovieData(data.results))
           .catch((error) => {
             console.log("Error!! Top Rated data interrupted!:", error);
           });
       });

    return (
        <div className="todaystopthree__container"> 
        <div className="todaystopthree__heading-container">
          <h1 className="todaystopthree__heading-h1">Today's Top Three Most Popular Features</h1>
          <h2 className="todaystopthree__heading-h2">Dont miss out on these!</h2>
        </div>
        <ul className="todaystopthree__flex-wrapper"> 
        {movieData.slice(0, 3).map((item, index) => (
          <li className="todaystopthree__list-item" ><MovieLinker number={index} key={item.id} movieItem={item} /></li>
        ))}
        
       </ul>
       
        </div>
    )
}


export default TodaysTopThree;