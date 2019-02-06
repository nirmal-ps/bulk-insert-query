## bulk-insert-query
<div align="center"> 
<a href="https://www.npmjs.com/package/bulk-insert-query">
    <img
      src="https://img.shields.io/npm/v/bulk-insert-query.svg" height="20">
  </a>
     <a href="https://www.npmjs.com/package/bulk-insert-query">
    <img
      src="https://img.shields.io/npm/dt/bulk-insert-query.svg" height="20">
  </a>
  <br/>
</div>
This package is used to generate native bulk insert SQL queries in the different supported dialects.

## Dialects

- MySQL





## Install

```sh
npm i -D bulk-insert-query
```

## Usage

```js
const GetBulkInsertQuery = require('bulk-insert-query')

GetBulkInsertQuery(tableName , columnNames , dataValues)
 * tableName - string
 * columnNames - Array of strings
 * dataValues - Array of Objects with column and value as key value pairs

GetBulkInsertQuery('table_name', ['name', 'age'], [{ name: 'test_name1', age: 22 } , { name: 'test_name2', age: 23 }])
// => "INSERT INTO table_name (name,age) values ('test_name',26),('test_name',26)"

GetBulkInsertQuery('test_table', ['id', 'city'], [{ id: 1, city: 'Delhi' } , { id: 2 , city: 'Bangalore' }])
// => "INSERT INTO test_table (id,city) values (1,'Delhi'),(2,'Bangalore')"

```

