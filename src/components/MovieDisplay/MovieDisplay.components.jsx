import React, { useEffect, useState } from "react";

const key = process.env.REACT_APP_APIKEY;

const MovieList = ({movieItem}) => {
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
       <div>
        <a target="_blank" rel="noopener noreferrer" href={movieImage}>
         
            <img
              className="image-element"
              tabIndex={0}
              aria-label={movieItem.title}
              title={`--Title: ${movieItem.title}--  --Description:    ${movieItem.overview}--  --Vote Average: ${movieItem.vote_average}`}
              alt="movie poster"
              src={`https://image.tmdb.org/t/p/w500${movieItem.backdrop_path}`}
            />
            <h3 className="posterTitle">{movieItem.title}</h3>
          
        </a>
        </div>
      
    )
}

export default MovieList;