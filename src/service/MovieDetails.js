import api from "./index";

export const MovieDetails = (movieId) => {
  return api.get(
    `/movie/${movieId}?api_key=4e6acf40a1325c053fe47b60db2eb692&language=en-US`
  );
};
