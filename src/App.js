import { useEffect, useState } from "react";
import Movie from "./MovieCard";
import Navbar from "./Navbar";
import Side from "./Side";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

function App() {
  const [movies,setMovies]=useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search)
  };


useEffect(()=>{
  searchMovies("Avengers");
}
,[]);
// const movie = {
//   "Title": 'Ross',
//   "Year": "2002",
//   "Type": "sex",
//   "Poster": "",
//   "imdbID": ""
// };
  return (
    <div className="App">
      <Navbar searchMovies={searchMovies}/>
      <Side searchMovies={searchMovies}/>
      {movies?.length > 0 ? (
        <div className="MovieContainer">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="MovieContainer">
          <h2>No movies found XD</h2>
        </div>
      )}
      </div>
    
  );
}

export default App;
