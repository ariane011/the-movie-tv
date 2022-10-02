import React, { useEffect, useState } from "react";
import { Input } from "antd";
import api from "../../service";

export const Search = () => {
  const { Search } = Input;

  const [search, setSearch] = useState(""); //estado que irá guardar o valor do input
  const [movies, setMovies] = useState([]);

  const id = localStorage.getItem("id");

  useEffect(() => {
    console.log("Entrou no useEffect");
    let searchMovie = `/search/movie?api_key=4e6acf40a1325c053fe47b60db2eb692&language=en-US&query=${search}&page=1&include_adult=false`;
    // if (search.length !== 0) {
    //   //  se o valor do input conter alguma informação, coloca-la na query para filtrar as noticias
    //   //   console.log("NO IF", (api += searchMovie));
    //   searchMovie += search;
    // }

    api
      .get(searchMovie, {
        headers: {
          Authorization: id,
        },
      })
      .then(async (response) => {
        const movies = response.data;
        setMovies(movies.results);
      });
  }, [search, id]); // repete o processo sempre que o valor do input mudar

  return (
    <>
      <Search
        placeholder=" Pesquise por um filme aqui..."
        type="search"
        name="search-form"
        id="search-form"
        onChange={(e) => setSearch(e.target.value)}
        className="input-search"
        size="large"
      />

      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-6" key={movie.id}>
            {console.log("PASSOU", movie.title)}
          </div>
        ))}
      </div>
    </>
  );
};
