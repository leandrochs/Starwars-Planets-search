import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import './App.css';
import PlanetsContext from './context/planetsContext';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';
import ShowFilters from './components/ShowFilters';

function App() {
  const [data, setData] = useState('');
  const [planetName, setPlanetName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [filters, setFilters] = useState([]);

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

  const contextValue = {
    data: data && filterFunc(data),
    setData,
    filterByName: {
      planetName,
      setPlanetName },
    filterByNumericValues: {
      column,
      setColumn,
      comparison,
      setComparison,
      value,
      setValue },
    filters,
    setFilters,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      <div style={ { display: 'flex', flexDirection: 'column' } }>
        <span>
          <FilterByName />
        </span>
        <span>
          <FilterByNumericValues />
        </span>
        <ShowFilters />
      </div>
      { (data) ? <Table /> : <div>Carregando...</div> }
    </PlanetsContext.Provider>
  );
}

export default App;
