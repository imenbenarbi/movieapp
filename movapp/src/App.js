import { useState } from "react";
import "./styles.css";

import { moviesData } from "./component/movieData";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";
import SearchMovie from "./component/SearchMovie";
export default function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchName, setSearchName] = useState("");
  const [searchRating, setSearchRating] = useState("");
  console.log(movies);
  const addHandler = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="wrapper">
      <SearchMovie
        setSearchName={setSearchName}
        setSearchRating={setSearchRating}
      />
      <MovieList
        movies={movies}
        searchName={searchName}
        searchRating={searchRating}
      />
      <AddMovie addHandler={addHandler} />
    </div>
  );
}

