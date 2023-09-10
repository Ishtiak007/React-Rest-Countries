import { useState } from "react";
import "./country.css";
const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const visitedBtn = () => {
    setVisited(true);
  };

  return (
    <div className="country">
      <h3>Name : {name?.common}</h3>
      <img className="img-h-w" src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code : {cca3}</small>
      </p>
      <button onClick={visitedBtn} className="button-visited">
        Visited
      </button>
      {visited ? "I have visited this country before" : "I want to visit there"}
    </div>
  );
};

export default Country;