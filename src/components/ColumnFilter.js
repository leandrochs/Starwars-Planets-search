import React from 'react';
import PlanetsContext from '../context/planetsContext';

function ColumnFilter() {
  const allOptions = [
    { value: 'population', label: 'population' },
    { value: 'orbital_period', label: 'orbital_period' },
    { value: 'diameter', label: 'diameter' },
    { value: 'rotation_period', label: 'rotation_period' },
    { value: 'surface_water', label: 'surface_water' },
  ];

  return (
    <PlanetsContext.Consumer>
      { ({ filters, filterByNumericValues: { column, setColumn } }) => {
        let options = allOptions;
        if (filters.length > 0) {
          filters.forEach((fil) => {
            const filtered = options.filter(({ value }) => value !== fil.column);
            options = filtered;
          });
        }

        return (
          <select
            data-testid="column-filter"
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
        );
      }}
    </PlanetsContext.Consumer>
  );
}

export default ColumnFilter;
