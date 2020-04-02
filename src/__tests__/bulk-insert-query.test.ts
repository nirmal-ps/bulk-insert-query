import { GetBulkInsertQuery } from '../index';

test('GetBulkInsertQuery: basic test 1', () => {
  const expectedOutput = "INSERT INTO table_name (name,age) values ('test_name',26),('test_name',26)";
  expect(GetBulkInsertQuery('table_name', ['name', 'age'], [{ name: 'test_name', age: 26 } , { name: 'test_name', age: 26 }])).toBe(expectedOutput);
});

test('GetBulkInsertQuery: basic test 2', () => {
  const expectedOutput = "INSERT INTO test_table (id,city) values (1,'Delhi'),(2,'Bangalore')";
  expect(GetBulkInsertQuery('test_table', ['id', 'city'], [{ id: 1, city: 'Delhi' } , { id: 2 , city: 'Bangalore' }])).toBe(expectedOutput);
});

test('GetBulkInsertQuery: test improper format', () => {
  const expectedErrorMessage = "400 Bad Request: Arguments were not provided in proper format";
  expect(() => {
    GetBulkInsertQuery('', ['id', 'city'], [{ id: 1, city: 'Delhi' }])
  }).toThrow(expectedErrorMessage);
  expect(() => {
    GetBulkInsertQuery('table_name', [], [{ id: 1, city: 'Delhi' }])
  }).toThrow(expectedErrorMessage);
  expect(() => {
    GetBulkInsertQuery('table_name', ['id', 'city'], [])
  }).toThrow(expectedErrorMessage);
});

test('GetBulkInsertQuery: test data validation of values collection', () => {
  const expectedErrorMessage = "400 Bad Request: The `values` collection must have property names specified in the `columns` list";
  expect(() => {
    GetBulkInsertQuery('table_name', ['id', 'city'], [{ id: 1 }, { id: 2, city: 'Bangalore' }])
  }).toThrow(expectedErrorMessage);
  expect(() => {
    GetBulkInsertQuery('table_name', ['id', 'city'], [{ id: 1, city: 'Delhi' }, { id: 2 }])
  }).toThrow(expectedErrorMessage);
  expect(() => {
    GetBulkInsertQuery('table_name', ['id', 'city'], [{ id: 1, city: 'Delhi', extra: 3 }, { id: 2, city: 'Bangalore', other: 5 }])
  }).not.toThrow();
});
