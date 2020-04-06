import axios from 'axios';

const KEY = '?api_key=cdb8257d9d90538f8e72b60087a26c1c';
const BASE_URL = `https://api.themoviedb.org/3/`;

export const fetchTrendingFilms = () =>
  axios
    .get(`${BASE_URL}trending/movie/week${KEY}`)
    .then(response => response.data);

export const fetchFilmSearch = query =>
  axios
    .get(`${BASE_URL}search/movie${KEY}&query=${query}&page=1`)
    .then(response => response.data);

export const fetchFilmDetails = id =>
  axios
    .get(`${BASE_URL}movie/${id}${KEY}&language=en-EN`)
    .then(response => response.data);

export const fetchFilmCast = id =>
  axios
    .get(`${BASE_URL}movie/${id}/credits${KEY}&language=en-EN`)
    .then(response => response.data);

export const fetchFilmReviews = id =>
  axios
    .get(`${BASE_URL}movie/${id}/reviews${KEY}&language=en-EN`)
    .then(response => response.data);
