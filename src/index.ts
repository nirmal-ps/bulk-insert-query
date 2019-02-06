export const GetBulkInsertQuery = (tableName: string, columns: string[], values: any[]) => {
  const validColumns = Array.isArray(columns) && columns.length ? columns : Object.keys(values);
  const validValueObject = values.map((value: any) => {
    let queryString = `(`;
    for (let i = 0; i < validColumns.length; ++i) {
      if (typeof value[validColumns[i]] === 'number') {
        queryString = `${queryString} ${value[validColumns[i]]}${i !== validColumns.length - 1 ? ',' : ''}`;
      } else if (typeof value[validColumns[i]] === 'string') {
        queryString = `${queryString} '${value[validColumns[i]]}'${i !== validColumns.length - 1 ? ',' : ''}`;
      }
    }
    return `${queryString})`;
  });
  return `INSERT INTO ${tableName} (${validColumns.join(',')}) values ${validValueObject.join(',')}`;
};
