import React, { useEffect, useState } from "react";
import { Row, Col, message } from "antd";
import { Container, StyleHeader } from "./MoviesDetails.styled";
import { MovieDetails } from "../../service/MovieDetails";

export const MoviesDetails = () => {
  const [movie, setMovie] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    try {
      MovieDetails(id).then((response) => {
        const movies = response.data;
        setMovie(movies.results);
        console.log(movies);
      });
    } catch (error) {
      message.error(
        "Houve um erro ao carregar as informações, tente novamente mais tarde"
      );
    }
  }, [id]);

  return (
    <>
      <StyleHeader />
      <Container>
        {movie.map((index) => (
          <div key={index.id}>{console.log(index)}</div>
        ))}
      </Container>
    </>
  );
};
