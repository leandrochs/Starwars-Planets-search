import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import './App.css';
import PlanetsContext from './context/planetsContext';
import FilterByName from './components/FilterByName';

function App() {
  const [data, setData] = useState();
  const [planetName, setPlanetName] = useState('');

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((dataApi) => {
        setData(dataApi.results);
      });
  }, []);

  function filterFunc(allData) {
    return allData.filter((d) => d.name.includes(planetName));
  }

  const value = {
    data: data && filterFunc(data),
    setData,
    planetName,
    setPlanetName,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      <FilterByName />
      { data && <Table /> }
    </PlanetsContext.Provider>
  );
}

export default App;
