import React, { useEffect, useState } from "react";
import { message } from "antd";
import { Container, StyleHeader } from "./MoviesDetails.styled";
import { MovieDetails } from "../../service/MovieDetails";
import { useParams } from "react-router-dom";
import moment from "moment";

export const MoviesDetails = () => {
  const [movie, setMovie] = useState("");
  const { movieId } = useParams();

  function percentage(num, per) {
    return (num / 100) * per;
  }

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
        <div className="div-img-bg">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            alt={movie.title}
            className="img-background"
          />
        </div>
        <div className="div-infos">
          <div>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div className="div-details">
            <h1>{movie.title}</h1>
            <p style={{ fontWeight: 500 }}>
              {moment(movie.release_date).format("DD/MM/YYYY")}
            </p>
            <p style={{ fontWeight: 500 }}>
              Avaliação dos usuários:{" "}
              {percentage(1000, movie.vote_average).toPrecision(2)}%
            </p>
            <p className="txt-tagline">{movie.tagline}</p>
            <h2>Sinopse</h2>
            <p className="txt-overview">{movie.overview}</p>
          </div>
        </div>
        {console.log(movie)}
      </Container>
    </>
  );
};
