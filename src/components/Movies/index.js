import React, { useEffect, useState } from "react";
import api from "../../service";
import { Container, Poster } from "./Movies.styled";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    let popular =
      "/movie/popular?api_key=4e6acf40a1325c053fe47b60db2eb692&language=en-US&page=1";
    api
      .get(popular, {
        headers: {
          Authorization: id,
        },
      })
      .then((response) => {
        const movies = response.data;
        setMovies(movies.results);
      });
  }, [id]);

  return (
    <div style={{ marginLeft: 30 }}>
      {movies.map((movie) => (
        <Container>
          <Poster key={movie.id} style={{ color: "#fff" }}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
            />
          </Poster>
        </Container>
      ))}
    </div>
  );
};
