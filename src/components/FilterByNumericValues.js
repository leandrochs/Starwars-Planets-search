import React from 'react';
import ButtonFilter from './ButtonFilter';
import ColumnFilter from './ColumnFilter';
import ComparisonFilter from './ComparisonFilter';
import ValueFilter from './ValueFilter';

function FilterByNumericValues() {
  return (
    <>
      <ColumnFilter />
      <ComparisonFilter />
      <ValueFilter />
      <ButtonFilter />
    </>
  );
}

export default FilterByNumericValues;
