import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import './App.css';
import PlanetsContext from './context/planetsContext';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';
import ShowFilters from './components/ShowFilters';
import filterFunc from './services/filterFunc';

function App() {
  const [data, setData] = useState('');
  const [planetName, setPlanetName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((dataApi) => {
        setData(dataApi.results);
      });
  }, []);

  // function filterFunc(allData, filters) {
  //   let dataFiltered = allData;
  //   if (filters.length > 0) {
  //     filters.forEach((fil) => {
  //       const col = Object.values(fil)[0];
  //       const compar = Object.values(fil)[1];
  //       const val = parseInt(Object.values(fil)[2], 10);

  //       const apllyFilter = dataFiltered.filter((d) => {
  //         let res = [];
  //         if (compar === 'maior que') res = parseInt(d[col], 10) > val;
  //         if (compar === 'menor que') res = parseInt(d[col], 10) < val;
  //         if (compar === 'igual a') res = parseInt(d[col], 10) === val;
  //         return res;
  //       });

  //       dataFiltered = apllyFilter;
  //     });
  //   } else {
  //     dataFiltered = allData.filter((d) => d.name.includes(planetName));
  //   }

  //   return dataFiltered;
  // }

  const contextValue = {
    data: data && filterFunc(data, filters, planetName),
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
