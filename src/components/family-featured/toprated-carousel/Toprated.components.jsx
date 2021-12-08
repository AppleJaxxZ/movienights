import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Toprated.styles.scss";

const key = process.env.REACT_APP_APIKEY;

const TopRated = () => {
  const [toprated, setToprated] = useState([]);
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  useEffect(() => {
    const topratedUrl = `
    https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&region=US`;
    fetch(topratedUrl)
      .then((response) => response.json())
      .then((data) => setToprated(data.results))
      .catch((error) => {
        console.log("Error!! Top Rated data interrupted!:", error);
      });
  });

  return (
    <div className="topRated__slider-container">
      
      <Slider {...settings}>
        {toprated.map((item) => (
          <TopRatedMovies key={item.id} movieItem={item} />
        ))}
      </Slider>
    </div>
  );
};



const TopRatedMovies = ({ movieItem }) => {
  const [movieImage, setMovieImage] = useState(null);

  const getMovieImagesFromId = (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${key}`;
    return fetch(url);
  };

  useEffect(() => {
    getMovieImagesFromId(movieItem.id)
      .then((res) => res.json())
      .then((res) => {
        setMovieImage(res?.results?.US?.link);
      });
  }, [movieItem.id]);

  return (
    <ul className="topRated__flex-list">
      <a target="_blank" rel="noopener noreferrer" href={movieImage}>
        <li className="toprated__list-item">
          <img
            className="image-element"
            tabIndex={0}
            aria-label={movieItem.title}
            title={`--Title: ${movieItem.title}--  --Description:    ${movieItem.overview}--  --Vote Average: ${movieItem.vote_average}`}
            alt="movie poster"
            src={`https://image.tmdb.org/t/p/w500${movieItem.backdrop_path}`}
          />
          <h3 className="posterTitle">{movieItem.title}</h3>
        </li>
      </a>
    </ul>
  );
};

export default TopRated;