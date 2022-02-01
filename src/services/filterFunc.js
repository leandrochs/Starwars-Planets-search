export default function filterFunc(allData, filters, planetName) {
  let dataFiltered = allData;
  if (filters.length > 0) {
    filters.forEach((fil) => {
      const col = Object.values(fil)[0];
      const compar = Object.values(fil)[1];
      const val = parseInt(Object.values(fil)[2], 10);

      const apllyFilter = dataFiltered.filter((d) => {
        let res = [];
        if (compar === 'maior que') res = parseInt(d[col], 10) > val;
        if (compar === 'menor que') res = parseInt(d[col], 10) < val;
        if (compar === 'igual a') res = parseInt(d[col], 10) === val;
        return res;
      });

      dataFiltered = apllyFilter;
    });
  } else {
    dataFiltered = allData.filter((d) => d.name.includes(planetName));
  }

  return dataFiltered;
}
