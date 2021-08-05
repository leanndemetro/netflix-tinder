import React, { useState } from 'react';
import './style.css'

function Provider() {

  const [provider, setProvider] = useState("");

  var axios = require("axios").default;


  var options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
        country: 'us',
        service: provider,
        type: 'movie',
        genre: '18',
        page: '1',
        language: 'en'
      },
      headers: {
        'x-rapidapi-key': 'c6de40e20emsh48dafed56a65e5fp1f6fc0jsnb087b3479bae',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });



  return (
    <div>
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
    </div>
  );
}

export default Provider;

