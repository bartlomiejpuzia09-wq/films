import { useState } from "react";
import movies from "./data/movies.json";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const [watchedIds, setWatchedIds] = useState<number[]>([]);
  const [filter, setFilter] = useState("all");

  function toggleWatched(id: number) {
    if (watchedIds.includes(id)) {
      setWatchedIds(watchedIds.filter((watchedId) => watchedId !== id));
    } else {
      setWatchedIds([...watchedIds, id]);
    }
  }

  const shownMovies = movies.filter((movie) => {
    if (filter === "watched") {
      return watchedIds.includes(movie.id);
    }
    if (filter === "unwatched") {
      return !watchedIds.includes(movie.id);
    }
    return true;
  });

  return (
    <div>
      <h1>Moja lista filmów</h1>
      <p>
        Obejrzane: {watchedIds.length} / {movies.length}
      </p>

      <div>
        <button onClick={() => setFilter("all")}>Wszystkie</button>
        <button onClick={() => setFilter("watched")}>Obejrzane</button>
        <button onClick={() => setFilter("unwatched")}>Nieobejrzane</button>
      </div>

      {shownMovies.length === 0 && <p>Brak filmów do wyświetlenia</p>}

      {shownMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          year={movie.year}
          genre={movie.genre}
          watched={watchedIds.includes(movie.id)}
          onToggle={toggleWatched}
        />
      ))}
    </div>
  );
}

export default App;
