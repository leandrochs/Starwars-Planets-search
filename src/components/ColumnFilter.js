import React from 'react';
import PlanetsContext from '../context/planetsContext';

function ColumnFilter() {
  const options = [
    { value: 'Select Column', label: 'Select Column' },
    { value: 'population', label: 'Population' },
    { value: 'orbital_period', label: 'Orbital Period' },
    { value: 'diameter', label: 'Diameter' },
    { value: 'rotation_period', label: 'Rotation Period' },
    { value: 'surface_water', label: 'Surface Water' },
  ];

  return (
    <PlanetsContext.Consumer>
      { ({ filterByNumericValues: { column, setColumn } }) => (
        <select
          testid="column-filter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          { options.map(({ value, label }) => (
            <option
              key={ value }
              value={ value }
            >
              { label }
            </option>)) }
        </select>
      )}
    </PlanetsContext.Consumer>
  );
}

export default ColumnFilter;
