import { useEffect, useState } from "react";
import type { Movie } from "../../models/movie.model";
import { getMovies } from "../../service/MoviesService";
import MovieList from "./MovieList";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies().then(data => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        <p>Loading movies...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-red-600 mb-8">
        Horror Movies
      </h1>
      <MovieList movies={movies} />
    </div>
  );
}
