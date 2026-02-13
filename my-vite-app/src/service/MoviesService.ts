import type { Movie } from "../models/movie.model";

export const getMovies = async (): Promise<Movie[]> => {
  const response = await fetch("/Movies.json");
  const data = await response.json();
  return data;
};

export const getMovieById = async (id: number): Promise<Movie | undefined> => {
  const movies = await getMovies();
  return movies.find(movie => movie.id === id);
};
