import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/planetsContext';

function RemoveFilter(props) {
  const { column } = props;

  return (
    <PlanetsContext.Consumer>
      {({ filters, setFilters }) => (
        <button
          style={ { backgroundColor: 'red', marginLeft: '50px' } }
          type="button"
          value={ column }
          onClick={ (e) => {
            setFilters(filters.filter((f) => f.column !== e.target.value));
          } }
        >
          X
        </button>
      )}
    </PlanetsContext.Consumer>
  );
}

RemoveFilter.propTypes = {
  column: PropTypes.string.isRequired,
};

export default RemoveFilter;
