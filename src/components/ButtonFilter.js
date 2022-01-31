import React from 'react';
import PlanetsContext from '../context/planetsContext';

function ButtonFilter() {
  return (
    <PlanetsContext.Consumer>
      { ({
        filters,
        setFilters,
        filterByNumericValues: { column, comparison, value },
      }) => (
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => setFilters([...filters, { column, comparison, value }]) }
        >
          Aplicar
        </button>
      )}
    </PlanetsContext.Consumer>
  );
}

export default ButtonFilter;
