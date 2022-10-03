import api from "./index";

export const PopularMovies = () => {
  return api.get(
    `/movie/popular?api_key=4e6acf40a1325c053fe47b60db2eb692&language=en-US&page=1`
  );
};
