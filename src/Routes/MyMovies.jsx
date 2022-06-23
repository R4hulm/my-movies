import React from "react";
import Movie from "../Components/Movie";
import { movieList } from "../Data/MovieList";
import './MyMovies.styles.css';

const MyMovies = () => {
    return (
        <>
            <h1 className="heading">MY MOVIES</h1>
            <div className="movies-container">
            {movieList.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
            </div>
        </>
    )
}

export default MyMovies;