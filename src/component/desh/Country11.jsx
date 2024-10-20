import { useState } from 'react';
import '../desh/country.css';

const Country11 = ({ country, handleCountyVistry, flagShow }) => {
  const { name, flags, population, area, cca3 } = country;
  // console.log(country);

  const [visited, setVisited] = useState(false);

  const handlVisited = () => {
    setVisited(true);
  };

  // console.log(handleCountyVistry);
  // const parsByCounty = () => handleCountyVistry(country);
  return (
    <div className={`country ${visited && 'visited'}`}>
      <h4>Country Name: {name.common}</h4>
      <img src={flags.png} alt={`${name.common} flag`} />
      <p>Population: {population}</p>
      <p>area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleCountyVistry(country)}>New Visited</button>
      <br />
      <br />
      <button onClick={handlVisited}>{visited ? 'visited' : 'Going'}</button>
      {visited ? 'I have visited this country ' : 'i going to country'}
      <br />
      <br />
      <button onClick={() => flagShow(country.flags.png)}>Flag Show</button>
    </div>
  );
};

export default Country11;
