# CompactQueryBuilder
Query builder for JS
```javascript
let query = QueryBuilder.From('tableName');
    query.Desc('columnName');
    query.Where('columnName', '0', '>=');
let querystr = query.ToString(); //tableName[(columnName>='0')](columnName desc) 
```
