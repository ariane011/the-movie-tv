import React from "react";
import { Link } from "react-router-dom";
import { Container, Poster } from "./Movies.styled";

export const MoviesList = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Container>
        <Poster key={movie.id} style={{ color: "#fff" }}>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
          />
        </Poster>
      </Container>
    </Link>
  );
};
