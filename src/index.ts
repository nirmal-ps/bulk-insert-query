import * as sqlString from 'sqlstring';

export const GetBulkInsertQuery = (tableName: string, columns: string[], values: any[]) => {
  validations(tableName, columns, values)
  const validColumns = Array.isArray(columns) && columns.length ? columns : Object.keys(values[0]);
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

/**
 * Run validations on the user input
 *
 * Throw Error if any validation fails
 */
const validations = (tableName: string, columns: string[], values: any[]) => {
  // basic validations
  if (!tableName
      || typeof tableName !== 'string'
      || !columns
      || !columns.length
      || columns.some(e => typeof e !== 'string')
      || !values
      || !values.length
    ) {
    throw new Error('400 Bad Request: Arguments were not provided in proper format')
  }
  // check if values collection contains all keys
  // specified in columns list
  if (!values.every(val => columns.every(col => !!val[col]))) {
    throw new Error('400 Bad Request: The `values` collection must have property names specified in the `columns` list')
  }
}
