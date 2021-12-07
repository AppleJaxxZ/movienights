import React, {useState, useEffect} from 'react';
import MovieList from '../MovieDisplay/MovieDisplay.components';
import "./TodaysTopThree.styles.scss"
const key = process.env.REACT_APP_APIKEY;


const TodaysTopThree = ({movieItem}) => {
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
        <ul className="todaystopthree__flex-wrapper"> 
        {movieData.slice(0, 3).map((item, index) => (
          <li className="todaystopthree__list-item" id={index}><MovieList key={item.id} movieItem={item} /></li>
        ))}
        
       </ul>
       
        </div>
    )
}


export default TodaysTopThree;