import React, {useState, useEffect} from 'react';
import Slider from "react-slick"; 
import MovieList from '../../MovieDisplay/MovieDisplay.components';
import "./family-featured-navbar.styles.scss"
const key = process.env.REACT_APP_APIKEY;

const FamilyFeaturedNavigation = () => {

    const [movieUrl, setMovieUrl] = useState(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&region=US`)
const [movieData, setMovieData] = useState([]);

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

useEffect(() => {
    fetch(movieUrl)
       .then((response) => response.json())
       .then((data) => setMovieData(data.results))
       .catch((error) => {
         console.log("Error!! Top Rated data interrupted!:", error);
       });
   });
 

    return (
        <div>
            <h1 className="familyFeatured__heading">Fun For Every Night</h1>
        <nav className="familyFeatured__navContainer">
                <ul className="familyFeatured__flex-container">
                    <li tabIndex="0" onClick={()=> setMovieUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751&with_watch_monetization_types=flatrate`)} className="familyFeatured__link">Family</li>
                    <li   className="familyFeatured-seperator">l</li>
                    <li tabIndex="0" onClick={()=> setMovieUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`)} className="familyFeatured__link">Animation</li>
                    <li   className="familyFeatured-seperator">|</li>
                    <li tabIndex="0" onClick={()=> setMovieUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`)} className="familyFeatured__link">Comedy</li>
                    <li   className="familyFeatured-seperator">|</li>
                    <li tabIndex="0" onClick={()=> setMovieUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`)} className="familyFeatured__link">Adventure</li>
                </ul>
            </nav>

            <div className="topRated__slider-container">
      <div className="topRated__slider-title">
      </div>
      <Slider {...settings}>
        {movieData.map((item) => (
          <MovieList key={item.id} movieItem={item} />
        ))}
      </Slider>
    </div>
            </div>
        
    )
}


export default FamilyFeaturedNavigation;

