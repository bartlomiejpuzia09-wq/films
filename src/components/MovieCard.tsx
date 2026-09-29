import { useState } from "react";

type Props = {
  id: number;
  title: string;
  year: number;
  genre: string;
  watched: boolean;
  onToggle: (id: number) => void;
};

function MovieCard(props: Props) {
  const [isWatched, setIsWatched] = useState(props.watched);

  function handleClick() {
    setIsWatched(!isWatched);
    props.onToggle(props.id);
  }

  return (
    <div className={isWatched ? "card watched" : "card"}>
      <h2>{props.title}</h2>
      <p>Rok: {props.year}</p>
      <p>Gatunek: {props.genre}</p>
      <button onClick={handleClick}>
        {isWatched ? "✓ Obejrzany" : "Oznacz jako obejrzany"}
      </button>
    </div>
  );
}

export default MovieCard;
