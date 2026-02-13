import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Movie } from "../../models/movie.model";
import { getMovieById } from "../../service/MoviesService";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function Load() {
      if (!id) return;
      const data = await getMovieById(Number(id));
      setMovie(data ?? null);
      setLoading(false);
    }
    Load();
  }, [id]);

  if (loading) {
    return <p className="text-white p-10">Loading...</p>;
  }

  if (!movie) {
    return <p className="text-white p-10">Movie not found 😱</p>;
  }
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-10">
      <h1>Movie details</h1>
      <p>Title: {movie.title}</p>
      <p>Id: {movie.id}</p>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
      <p>Duration: {movie.duration} min</p>
      <p>Director: {movie.director}</p>
    </div>
  );
}
