
const  Movie= ({movie}) => {
  
  return ( 
    <div className="Movie" key={movie.imdbID}>
      <div className="imgDiv"><img src={movie.Poster} alt="picture here ahah sorry" /></div>
      <div className="M">
      <p className="Type">{movie.Type}</p>
      <p className="Title">{movie.Title}</p>
      <p className="Year">{movie.Year}</p>
      </div>
    </div>
   );
}
 
export default Movie;