import React, { useState } from 'react';
import './style.css'


function Genre() {
    const [genre, setGenre] = useState("1");
    const [provider, setProvider] = useState("apple");
    const [image, setImage] = useState("https://i.imgur.com/8Ry23Uo.jpg");
    const [type, setType] = useState("movie");
    const [itemNumber, setItemNumber] = useState("0");
    const [pageNumber, setPageNumber] = useState("1");


    // console.log(genre, provider)

    function axiosRequest() {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/search/basic',
            params: {
                country: 'us',
                service: provider,
                type: type,
                genre: genre,
                page: pageNumber,
                language: 'en'
            },
            headers: {
                'x-rapidapi-key': 'c6de40e20emsh48dafed56a65e5fp1f6fc0jsnb087b3479bae',
                'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            // 429 error -- try response.data.results.title tomorrow!
            if (response.data.results.length === 0) {
                dataHasNoValue();
            }
            else {
                var returnedList = response.data
                dataHasValue(returnedList);
            }

        }).catch(function (error) {
            console.error(error);
        });

    }

    function dataHasValue(returnedList) {
        console.log(returnedList);
        setImage(returnedList.results[itemNumber].posterURLs.original);
       

    }

    function dataHasNoValue() {
        setImage("https://i.imgur.com/SgVHskG.jpg")
       
    }

    function passClick() {
        if (itemNumber < 7) {
            setItemNumber(Number(itemNumber) + 1)
            axiosRequest();
        }
        else {
            setPageNumber(Number(pageNumber) + 1)
            setItemNumber("0")
            axiosRequest();
        }


    }
    // function pickClick() {
    //     if (itemNumber < 8) {
    //         setItemNumber(Number(itemNumber) + 1)
    //         axiosRequest();
    //     }
    // }


    return (
        <div className="text-center">
            <br></br>
            <select className="genreDropdown dropdown"
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

            <select className="providerDropdown dropdown"
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
            <select className="typeDropdown dropdown"
                value={type}
                onChange={e => setType(e.currentTarget.value)}>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
            </select>
            <button className="goButton" onClick={axiosRequest}>Search Now</button>
            <div>
                <div
                    className="card"
                >
                    <img className="cardImage" src={image}></img>
                    <button
                        className="card-btn pass"
                        onClick={passClick}
                    />
                    <button
                        className="card-btn pick"
                        onClick={passClick}


                    />
                </div>

            </div>



        </div>


    );
}

export default Genre;