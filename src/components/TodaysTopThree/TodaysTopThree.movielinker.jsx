import React, { useEffect, useState } from "react";
import CustomButton from "../custom-button/custom-button.components";

const key = process.env.REACT_APP_APIKEY;

const MovieLinker = ({ movieItem }, props) => {
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
    <div className="todaystopthree__movieLinker-container">
      <a target="_blank" key={movieImage} rel="noopener noreferrer" href={movieImage}>

        <img
          id={props.number}
          className="movieLinker__image"
          tabIndex={0}
          key={movieItem.id}
          aria-label={movieItem.title}
          title={`--Title: ${movieItem.title}--  --Description:    ${movieItem.overview}--  --Vote Average: ${movieItem.vote_average}`}
          alt="movie poster"
          src={`https://image.tmdb.org/t/p/w500${movieItem.backdrop_path}`}
        />
        <h3 className="movieLinker__posterTitle" key={movieItem.title}>{movieItem.title} </h3>
      </a>
      <CustomButton title="Rent Now" />
    </div>

  )
}

export default MovieLinker;