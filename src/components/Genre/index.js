import React, { useState } from 'react';
import './style.css'
import Card from '../Card';


function Genre(props) {
    // Declare a new state variable, which we'll call "count"
    const [genre, setGenre] = useState("");
    const [provider, setProvider] = useState("");
    const [title, setTitle] = useState("Choose a genre and provider");
    const [image, setImage] = useState("https://i.imgur.com/NbH9CMf.jpg");

    console.log(genre, provider)

    function axiosRequest() {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/search/basic',
            params: {
                country: 'us',
                service: provider,
                type: 'movie',
                genre: genre,
                page: '1',
                language: 'en'
            },
            headers: {
                'x-rapidapi-key': 'c6de40e20emsh48dafed56a65e5fp1f6fc0jsnb087b3479bae',
                'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            var returnedList = response.data
            setImage(returnedList.results[0].posterURLs.original);
            setTitle(returnedList.results[0].title);


        }).catch(function (error) {
            console.error(error);
        });

    }

    return (
        <div className="text-center">
            <br></br>
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

            <select className="providerDropdown"
                value={provider}
                onChange={e => setProvider(e.currentTarget.value)}>
                <option value="apple">Apple</option>
                <option value="disney">Disney</option>
                <option value="hbo">Hbo</option>
                <option value="hulu">Hulu</option>
                <option value="mubi">Mubi</option>
                <option value="netflix">Netflix</option>
                <option value="paramount">Paramount</option>
                <option value="peacock">Peacock</option>
                <option value="showtime">Showtime</option>
                <option value="starz">Starz</option>
            </select>
            <br></br>
            <br></br>
            <button onClick={axiosRequest}>GO</button>
            <br></br>
            <br></br><div>
                <h1 className="text-center">{title}</h1>
                <div
                    className="card"
                >
                    <img className="cardImage" src={image}></img>
                </div>
            </div>

        </div>


    );
}

export default Genre;