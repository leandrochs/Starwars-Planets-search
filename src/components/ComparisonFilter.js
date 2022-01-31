import React from 'react';
import PlanetsContext from '../context/planetsContext';

function ComparisonFilter() {
  const options = [
    { value: 'Select Comparison', label: 'Select Comparison' },
    { value: '>', label: 'greater than' },
    { value: '<', label: 'less than' },
    { value: '===', label: 'equal' },
  ];

  return (
    <PlanetsContext.Consumer>
      { ({ filterByNumericValues: { comparison, setComparison } }) => (
        <select
          testid="comparison-filter"
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
