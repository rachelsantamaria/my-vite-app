import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black border-b border-red-800 px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-700 tracking-wide">
        Rachel Horror Films
      </h1>

      <nav className="space-x-6 text-gray-300">
        <Link to="/" className="hover:text-red-600 transition">
          Home
        </Link>
        <Link to="/movies" className="hover:text-red-600 transition">
          Movies
        </Link>
      </nav>
    </header>
  );
}

