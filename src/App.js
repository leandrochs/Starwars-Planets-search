import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import './App.css';
import PlanetsContext from './context/planetsContext';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((dataApi) => {
        setData(dataApi.results);
      });
  }, []);

  const value = {
    data,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      { data && <Table /> }
    </PlanetsContext.Provider>
  );
}

export default App;
