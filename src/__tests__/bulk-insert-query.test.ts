import { GetBulkInsertQuery } from '../index';

test('GetBulkInsertQuery TEST', () => {
  const expectedOutput = "INSERT INTO table_name (name,age) values ('test_name',26),('test_name',26)";
  expect(GetBulkInsertQuery('table_name', ['name', 'age'], [{ name: 'test_name', age: 26 } , { name: 'test_name', age: 26 }])).toBe(expectedOutput);
});

test('GetBulkInsertQuery TEST CITY', () => {
    const expectedOutput = "INSERT INTO test_table (id,city) values (1,'Delhi'),(2,'Bangalore')";
    expect(GetBulkInsertQuery('test_table', ['id', 'city'], [{ id: 1, city: 'Delhi' } , { id: 2 , city: 'Bangalore' }])).toBe(expectedOutput);
  });
