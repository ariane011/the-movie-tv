import React, { useEffect, useState } from "react";
import { Container, Styled } from "./Home.styled";
import { Movies } from "../Movies";
import { Row, Col, message } from "antd";
import { Search } from "../Search";
import debounce from "lodash.debounce";
import { SearchMovies } from "../../service/Search";
import { PopularMovies } from "../../service/PopularMovies";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (search.length !== 0) {
      try {
        SearchMovies(search).then((response) => {
          const movies = response.data;
          const debounced = debounce(() => {
            setMovies(movies.results);
          }, 500);
          debounced();
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
            <Search onChange={(e) => setSearch(e.target.value)} />
          </Col>
        </Row>
        {search ? (
          <h1>Resultados para {JSON.stringify(search)}</h1>
        ) : (
          <h1>Mais populares...</h1>
        )}
        {movies.map((movie) => (
          <div style={{ marginLeft: 50, display: "inline-flex" }}>
            <Movies key={movie.id} movie={movie} />
          </div>
        ))}
      </Container>
    </>
  );
};
