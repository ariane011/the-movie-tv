import React, { useEffect, useState } from "react";
import { Row, Col, message } from "antd";
import { Container, StyleHeader } from "./MoviesDetails.styled";
import { MovieDetails } from "../../service/MovieDetails";
import { useParams } from "react-router-dom";

export const MoviesDetails = () => {
  const [movie, setMovie] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    try {
      MovieDetails(movieId).then((response) => {
        const movies = response.data;
        setMovie(movies);
      });
    } catch (error) {
      message.error(
        "Houve um erro ao carregar as informações, tente novamente mais tarde"
      );
    }
  }, [movieId]);

  return (
    <>
      <StyleHeader />
      <Container>
        {/* background image */}
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt={movie.title}
        />
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <p>{movie.runtime}</p>
        <p>{movie.vote_average}</p>
        <p>Reproduzir trailer</p>
        <p>{movie.tagline}</p>
        <h2>Sinopse</h2>
        <p>{movie.overview}</p>
        <p>{movie.overview}</p>
        <p>{movie.overview}</p>
        <p>{movie.overview}</p>
        {console.log(movie)}
      </Container>
    </>
  );
};
