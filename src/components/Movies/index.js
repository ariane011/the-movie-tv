import React from "react";
import { Container, Poster } from "./Movies.styled";

export const Movies = ({ movie }) => {
  return (
    <Container>
      <Poster key={movie.id} style={{ color: "#fff" }}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
        />
      </Poster>
    </Container>
  );
};
