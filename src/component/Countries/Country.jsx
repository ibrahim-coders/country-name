import React, { useEffect, useState } from 'react';
import Country11 from '../desh/Country11';
import './countries.css';
export default function Country() {
  const [country, setCountry] = useState([]);
  const [visiteCountry, setCounttyCountry] = useState([]);
  const [countFlag, setCountFlag] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountry(data));
  }, []);

  const handleCountyVistry = country => {
    console.log(' i went to this country');
    // console.log(country);
    const newVisiteCountry = [...visiteCountry, country];
    setCounttyCountry(newVisiteCountry);
  };

  const flagShow = flag => {
    console.log(flag);
    const newFlag = [...countFlag, flag];
    setCountFlag(newFlag);
  };

  return (
    <>
      <div>
        <div>
          <h2>Country: {country.length}</h2>
          <h2>Visied Country: {visiteCountry.length} </h2>
          <ul>
            {visiteCountry.map(country => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
        </div>

        <div>
          {countFlag.map(flag => (
            <img src={flag} alt="" />
          ))}
        </div>
        <div className="country-container">
          {country.map(countr => (
            <Country11
              key={country.cca3}
              handleCountyVistry={handleCountyVistry}
              flagShow={flagShow}
              country={countr}
            ></Country11>
          ))}
        </div>
      </div>
    </>
  );
}
