import { GetBulkInsertQuery } from '../index';

test('GetBulkInsertQuery TEST', () => {
    const expectedOutput = "INSERT INTO table_name (name,age) values ( 'test_name', 26)"
    expect(GetBulkInsertQuery('table_name' , ['name' , 'age'] , [{name: 'test_name' , age: 26}])).toBe(expectedOutput);
  });