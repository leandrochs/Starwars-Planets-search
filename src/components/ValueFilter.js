import React from 'react';
import PlanetsContext from '../context/planetsContext';

function ValueFilter() {
  return (
    <PlanetsContext.Consumer>
      { ({ filterByNumericValues: { value, setValue } }) => (
        <input
          data-testid="value-filter"
          type="number"
          placeholder="Input number"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      )}
    </PlanetsContext.Consumer>
  );
}

export default ValueFilter;
