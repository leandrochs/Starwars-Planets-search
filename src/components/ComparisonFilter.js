import React from 'react';
import PlanetsContext from '../context/planetsContext';

function ComparisonFilter() {
  const options = [
    { value: 'maior que', label: 'maior que' },
    { value: 'igual a', label: 'igual a' },
    { value: 'menor que', label: 'menor que' },
  ];

  return (
    <PlanetsContext.Consumer>
      { ({ filterByNumericValues: { comparison, setComparison } }) => (
        <select
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
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

export default ComparisonFilter;
