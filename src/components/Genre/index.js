import React, { useState } from 'react';
import './style.css'
import Provider from '../Provider';

function Genre() {
  // Declare a new state variable, which we'll call "count"
  const [genre, setGenre] = useState("");
console.log(genre);



  return (
    <div>
      <select className="genreDropdown"
      value={genre}
      onChange={e => setGenre(e.currentTarget.value)}>
            <option value="1">Biography</option>
            <option value="2">Film Noir</option>
            <option value="3">Game Show</option>
            <option value="4">Musical</option>
            <option value="5">Sport</option>
            <option value="6">Short</option>
            <option value="7">Adult</option>
            <option value="12">Adventure</option>
            <option value="14">Fantasy</option>
            <option value="16">Animation</option>
            <option value="18">Drama</option>
            <option value="27">Horror</option>
            <option value="28">Action</option>
            <option value="35">Comedy</option>
            <option value="36">History</option>
            <option value="37">Western</option>
            <option value="53">Thriller</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="878">Science Fiction</option>
            <option value="9648">Mystery</option>
            <option value="10402">Music</option>
            <option value="10749">Romance</option>
            <option value="10751">Family</option>
            <option value="10752">War</option>
            <option value="10763">News</option>
            <option value="10764">Reality</option>
            <option value="10767">Talk Show</option>
          </select>

          <Provider />
    </div>
  );
}

export default Genre;