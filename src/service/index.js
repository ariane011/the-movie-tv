import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=teste&page=1&include_adult=false

export default api;
