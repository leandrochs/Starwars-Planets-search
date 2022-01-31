import React from 'react';
import PlanetsContext from '../context/planetsContext';

function FilterByName() {
  return (
    <PlanetsContext.Consumer>
      { ({ filterByName: { planetName, setPlanetName } }) => (
        <input
          data-testid="name-filter"
          type="text"
          value={ planetName }
          placeholder="Filtro por nome"
          onChange={ (e) => setPlanetName(e.target.value) }
        />
      )}
    </PlanetsContext.Consumer>
  );
}

export default FilterByName;
