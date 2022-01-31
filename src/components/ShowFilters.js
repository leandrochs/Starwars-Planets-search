import React from 'react';
import PlanetsContext from '../context/planetsContext';
import RemoveFilter from './RemoveFilter';

function ShowFilters() {
  return (
    <PlanetsContext.Consumer>
      {
        ({ filters }) => (
          <div>
            {
              filters.map(({ column, comparison, value }) => (
                <div data-testid="filter" key={ column } style={ { display: 'flex' } }>
                  <div>{`${column} ${comparison.replace(/===/g, '=')} ${value}`}</div>
                  { ' ' }
                  <RemoveFilter column={ column } />
                </div>
              ))
            }
          </div>
        )
      }
    </PlanetsContext.Consumer>
  );
}

export default ShowFilters;
