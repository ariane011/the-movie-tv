import React, { useEffect, useState } from "react";
import { Container, Styled } from "./Home.styled";
import { Row, Col, message } from "antd";
import { Search } from "../../components/Search";
import debounce from "lodash.debounce";
import { SearchMovies } from "../../service/Search";
import { PopularMovies } from "../../service/PopularMovies";
import { MoviesList } from "../../components/MoviesList";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (search.length !== 0) {
      try {
        SearchMovies(search).then((response) => {
          const movies = response.data;
          setMovies(movies.results);
          console.log(movies);
        });
      } catch (error) {
        message.error(
          "Houve um erro ao fazer a requisição, tente novamente mais tarde."
        );
      }
    } else {
      PopularMovies().then((response) => {
        const movies = response.data;
        setMovies(movies.results);
      });
    }
  }, [id, search]);

  return (
    <>
      <Styled />
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col span={16}>
            <Search
              onChange={debounce((e) => setSearch(e.target.value), 500)}
            />
          </Col>
        </Row>
        {search ? (
          <h1>Resultados para {JSON.stringify(search)}</h1>
        ) : (
          <h1>Mais populares...</h1>
        )}
        {movies.map((movie) => (
          <div
            style={{ marginLeft: 50, display: "inline-flex" }}
            key={movie.id}
          >
            <MoviesList key={movie.id} movie={movie} />
          </div>
        ))}
      </Container>
    </>
  );
};
