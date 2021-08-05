import React, { useState } from 'react';
import './style.css'

function Provider() {

  const [provider, setProvider] = useState("");
console.log(provider);



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

