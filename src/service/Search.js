import api from "./index";

export const SearchMovies = (search) => {
  return api.get(
    `/search/movie?api_key=4e6acf40a1325c053fe47b60db2eb692&language=en-US&query=${search}&page=1&include_adult=false`
  );
};
