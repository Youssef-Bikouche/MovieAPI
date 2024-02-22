const Side = (searchMovies) => {
  return ( 
    <div className="Side">
       <div onClick={()=>searchMovies.searchMovies("superman")}>Superman</div>
       <div onClick={()=>searchMovies.searchMovies("Batman")}>Batman</div>
       <div onClick={()=>searchMovies.searchMovies("Shrek")}>Shrek</div>
       <div onClick={()=>searchMovies.searchMovies("Last of Us")}>Last of Us</div>
       <div onClick={()=>searchMovies.searchMovies("Spiderman")}>Spiderman</div>
    </div>
   );
}
 
export default Side;