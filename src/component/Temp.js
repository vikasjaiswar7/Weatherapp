import React, { useEffect, useState } from "react";
import "./css/style.css";
const Temps = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dbf1a1406033841839156b609a3e9dbf`;
      const response = await fetch(url);

      const resJSON = await response.json();
      // console.log(resjson);
      setCity(resJSON.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
      <h1 className="heading"  >Weather Report</h1>
        <div className="inputData">
            
          <input
            type="search"
            className="inputFeild" style={{fontSize:"30px",fontFmaily:"josh"}}
            value={search}
            onChange={(Event) => {
              setSearch(Event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <>
            <div className="info">
            <h2 className="location">
                <i  className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}°C | Max: {city.temp_max}°C
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Temps;
