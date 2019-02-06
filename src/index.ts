import * as sqlString from 'sqlstring';

export const GetBulkInsertQuery = (tableName: string, columns: string[], values: any[]) => {
  const validColumns = Array.isArray(columns) && columns.length ? columns : Object.keys(values);
  const validValueObject = values.map((value: any) => {
    let queryString = `(`;
    for (let i = 0; i < validColumns.length; ++i) {
      const formatedValue = sqlString.escape(value[validColumns[i]]);
      queryString = `${queryString}${formatedValue}${i !== validColumns.length - 1 ? ',' : ''}`;
    }
    return `${queryString})`;
  });
  return `INSERT INTO ${tableName} (${validColumns.join(',')}) values ${validValueObject.join(',')}`;
};
