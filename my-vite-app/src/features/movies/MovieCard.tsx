import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.model";

export default function MovieCard({ id, title, posterUrl, description }: Movie) {
  return (
    <Link to={`/movies/${id}`}>
      <div className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden 
                      hover:scale-105 transition duration-300 
                      border border-transparent hover:border-red-800">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <p className="text-lg font-bold text-red-600">{title}</p>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}

