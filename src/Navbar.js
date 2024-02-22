import { useState } from "react";

const  Navbar= (searchMovies) => {
  const [searchTerm,setSeacrhTerm]=useState('');
  return (  
    <div className="Header">
      <div className="logo"><h1>Aflam <span style={{fontSize: "50px",fontStyle: "italic"}}>4 </span>you </h1></div>
      <div className="input">
        <input onChange={(e)=> setSeacrhTerm(e.target.value)} type="text" placeholder="Your favorite movie here ?" value={searchTerm}/>
        <button onClick={()=>searchMovies.searchMovies(searchTerm)}>Search</button>
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
      </div>
    </div>
  );
}
 
export default Navbar;